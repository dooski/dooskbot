//calls dictionary.js for all word objects
const dictionary = require('./dictionary')
//calls the Twitter API
const server = require('./server');

let T = server

function feed() {
    T.get('account/verify_credentials', {
        include_entities: false,
        skip_status: true,
        include_email: false
    }, onAuthenticated)
    // waits till logged in above
    function onAuthenticated(err, res) {
        if (err) {
            throw err
        }
        // listens for mentions of dooskbot
        var streamFollow = T.stream('statuses/filter', { follow: ['1232125524035723270', '854830572'] });
        streamFollow.on('tweet', tweetEvent);
        console.log("stalking dooskbot")
        console.log("stalking hillary, but respectfully")
        // when dooskbot is mentioned:
        function tweetEvent(tweet) {
            console.log(tweet.text + " from @" + tweet.user.screen_name)
            var waka = tweet.text.includes("what if we")
            if (tweet.in_reply_to_status_id !== null) {
                console.log("shh")
            }
            else if (tweet.user.id === "854830572") {
                let ending = dictionary.ending()
                let reply = "@" + tweet.user.screen_name + " hey, man! " + ending
                var params = {
                    status: reply,
                    in_reply_to_status_id: tweet.id_str
                };
                sendReply(params)
            }
            if (waka == true) {
                hellYeah(tweet)
            }
        }
    }

    function hellYeah(tweet) {
        var nameID = tweet.id_str;
        let ending = dictionary.ending()
        let reply = "@dooskbot well no, " + ending;
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    }

    function sendReply(params) {
        console.log(params)
        T.post('statuses/update', params, function (err, data, response) {
            if (err !== undefined) {
                console.log(err);
            } else {
                console.log('Tweeted: ' + params.status);
            }
        })
    };
}

module.exports = {
    feed
}
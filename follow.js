//calls dictionary.js for all word objects
const dictionary = require('./dictionary')
//calls the Twitter API
const Twit = require('twit');

let T = new Twit({
    consumer_key: process.env.KEY,
    consumer_secret: process.env.KEY_SECRET,
    access_token: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRET
})


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
    var streamFollow = T.stream('statuses/filter', { follow: ['1246217799694942208'] });
    streamFollow.on('tweet', tweetEvent);
    console.log("listening... waiting .. . . ..")
    // when dooskbot is mentioned:
    function tweetEvent(tweet) {
        console.log(tweet.text + " from @" + tweet.user.screen_name)
        var nice = tweet.text.includes("it is 69 degrees")
        if (nice == true) {
            hellYeah(tweet)
        }
    }
}

function hellYeah(tweet) {
    var nameID = tweet.id_str;
    let ending = dictionary.ending()
    let reply = "@buffalo69bot nice " + ending;
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


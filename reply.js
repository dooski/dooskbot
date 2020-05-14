//calls dictionary.js for all word objects
const dictionary = require('./dictionary')
//calls dooskbot.js for some tweet generation
const dooskbot = require('./dooskbot')
//calls the Twitter API
const Twit = require('twit');
//API key
const key = require('./key')
let T = key.T

var start = stream()

function stream() {
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
        var stream = T.stream('statuses/filter', { track: ['@dooskbot'] });
        stream.on('tweet', tweetEvent);
        console.log("listening... waiting .. . . ..")
        // when dooskbot is mentioned:
        reply
        function tweetEvent(tweet) {
            console.log(tweet.text + " from @" + tweet.user.screen_name)
            reply(tweet)
        }
    }
}
// sends to dooskbot.js to make a reply (HAS NOT BEEN MADE YET)
function reply(tweet) {
    var name = tweet.user.screen_name;
    var nameID = tweet.id_str;
    let happen = Math.floor(Math.random() * 5)
    let bot = tweet.text.includes(" bot ")
    let what = tweet.text.includes(" what ")
    let why = tweet.text.includes(" why ")
    let should = tweet.text.includes(" should i ")
    let should2 = tweet.text.includes(" should I ")
    let question = tweet.text.includes("?")
    let dooskbot = tweet.text.includes(" dooskbot")
    let you = tweet.text.includes(" you ")
    let hillary = tweet.user.screen_name.includes("asst_to_hutch")
    if (hillary === true && happen << 2) {
        let a = Math.floor(Math.random() * dictionary.nouns.length)
        let noun = dictionary.nouns[a]
        let b = Math.floor(Math.random() * dictionary.places.length)
        let place = dictionary.places[b]
        let reply = "@" + name + " give hutch a " + noun + " " + place;
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (question === true || why === true || what === true || should === true || should2 === true) {
        let answers = ["yes", "sure", "i dont get it", "woah, dude, im married", "waka waka!", "maaaaybeeee", "well no", "haha nah", "maybe", "pizza? does that make sense?", "no", "not at all", "not even as a joke", "F", "yup", "sorry"]
        let a = Math.floor(Math.random() * answers.length)
        let answer = answers[a]
        let reply = "@" + name + " " + answer
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    }
    else if (happen << 1 && bot === true || dooskbot === true) {
        let reply = "what's a king to a bot, @" + name
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if
        (happen >> 5 && you === true) {
        let a = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[a];
        console.log(a)
        let original = tweet.text.replace("you", "*YOU*")
        original = original.replace("@dooskbot", "")
        let reply = "no, @" + name + ", " + original + " " + ending
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (happen === 0) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[a];
        let b = Math.floor(Math.random() * dictionary.nouns.length);
        let noun = dictionary.nouns[b]
        let c = Math.floor(Math.random() * dictionary.verbsEd.length);
        let verbEd = dictionary.verbsEd[c]
        let d = Math.floor(Math.random() * dictionary.nouns.length);
        let noun2 = dictionary.nouns[d]
        let e = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[e]
        let reply = "listen, @" + name + ", if " + properNoun + " " + verbEd + " a " + noun + ", then you should have at least " + verbEd + " a " + noun2 + " or something. " + ending
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (happen === 1) {
        let a = Math.floor(Math.random() * 16);
        let ending = dictionary.endings[a]
        let reply = "@" + name + " " + ending
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else console.log("not replying")
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

// setTimeout(stream, 2000)
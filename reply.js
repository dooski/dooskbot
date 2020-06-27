//calls dictionary.js for all word objects
const dictionary = require('./dictionary')
const dooskbot = require('./dooskbot')
const Twit = require('twit')

let beta = false
var T = betaCheck()
function betaCheck() {
    if (beta === true) {
        let T = new Twit({
            consumer_key: process.env.KEYBETA,
            consumer_secret: process.env.KEYBETA_SECRET,
            access_token: process.env.TOKENBETA,
            access_token_secret: process.env.TOKENBETA_SECRET
        })
        return T
    } else {
        let T = new Twit({
            consumer_key: process.env.KEY,
            consumer_secret: process.env.KEY_SECRET,
            access_token: process.env.TOKEN,
            access_token_secret: process.env.TOKEN_SECRET
        })
        return T
    }
}

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
        function tweetEvent(tweet) {
            console.log(tweet.text + " from @" + tweet.user.screen_name)
            reply(tweet)
        }
    }
}
// analyzes tweet, decides if it will reply, replies
function reply(tweet) {
    var name = tweet.user.screen_name;
    var nameID = tweet.id_str;
    let happen = Math.floor(Math.random() * 8)
    console.log(happen)
    let bot = tweet.text.includes(" bot ")
    let what = tweet.text.includes(" what ")
    let who = tweet.text.includes(" who ")
    let how = tweet.text.includes(" how ")
    let when = tweet.text.includes(" when ")
    let why = tweet.text.includes(" why ")
    let should = tweet.text.includes(" should i ")
    let should2 = tweet.text.includes(" should I ")
    let question = tweet.text.includes("?")
    let nothing = tweet.text.includes("this is nothing")
    let dooskbot = tweet.text.includes(" dooskbot")
    let you = tweet.text.includes(" you ")
    let hillary = tweet.user.screen_name.includes("asst_to_hutch")
    let dooski = tweet.user.screen_name.includes("dnmckn")
    // let dooskbeta = tweet.user.screen_name.includes("dooskbeta")
    if (happen > 4 && dooski === true) {
        let reply = "@dnmckn " + dictionary.lemongrab()
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (hillary === true && happen >= 6) {
        let thing = dictionary.thingSingular()
        let place = dictionary.placePrep()
        let reply = "@" + name + " why dont u give hutch a " + thing + " " + place;
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (nothing === true && happen <= 6) {
        let ending = dictionary.ending()
        let reply = "@" + name + " you're nothing " + ending;
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    }
    else if (question === true || who === true || how === true || when === true || why === true || what === true || should === true || should2 === true) {
        let answers = ["yes", "sure", "it's fine", "shhh sh sh, no", "big if true", "i dont get it", "woah, dude, im married", "waka waka!", "maaaaybeeee", "well no", "haha nah", "maybe", "pizza? does that make sense?", "no", "not at all", "not even as a joke", "F", "yup", "sorry"]
        let a = Math.floor(Math.random() * answers.length)
        let answer = answers[a]
        let reply = "@" + name + " " + answer
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (happen <= 3 && bot === true || dooskbot === true) {
        let person = dictionary.personSingular()
        let reply = "what's a " + person + " to a bot, @" + name
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if
        (happen >= 3 && you === true) {
        let ending = dictionary.ending()
        let original = tweet.text.replace("you", "*YOU*")
        original = original.replace("@dooskbot", "")
        let reply = "no, @" + name + ", " + original + " " + ending
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (happen === 0) {
        let person = dictionary.personSingular()
        let reply = "@" + name + " aright " + person
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (happen === 1) {
        let person = dictionary.personPlural()
        let verbEd = dictionary.verbPersonPast()
        let reply = "@" + name + " yeah, i've never really " + verbEd + " " + person + " much anyway"
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (happen === 2) {
        let ending = dictionary.endingForSure()
        let reply = "@" + name + " " + ending
        console.log(reply)
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else if (happen === 3) {
        let state = dictionary.state();
        let person = dictionary.personSingular()
        let reply = "@" + name + " dont get all " + state + ", my " + person
        var params = {
            status: reply,
            in_reply_to_status_id: nameID
        };
        sendReply(params)
    } else { console.log("not replying") }
}

function sendReply(params) {
    T.post('statuses/update', params, function (err, data, response) {
        if (err !== undefined) {
            console.log(err);
        } else {
            console.log('Tweeted: ' + params.status);
        }
    })
};

module.exports = {
    stream
}
const moment = require('moment');
const dictionary = require('./dictionary')
const Twit = require('twit')

let beta = true
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

function tickTock() {
    let now = moment().format('LT')
    console.log(now)
    timeChecks(now)
}

function timeChecks(now) {
    if (now === "4:20 AM" || now === "4:20 PM") {
        let adj = dictionary.adjective()
        let ending = dictionary.ending()
        let tweet = "oh " + adj + ", it's Weed Time " + ending
        T.post('statuses/update', {
            status: tweet,
        })
    } if (now === "7:45 AM") {
        let ending = dictionary.ending()
        let tweet = "i'm leaving my house like girlpool would at this time, historically speaking"
        T.post('statuses/update', {
            status: tweet,
        })
    } if (now === "8:25 AM") {
        let tweet = "now it's 8:25 am, assuming I am programmed correctly, so I'm gonna get a croissant and a cup of COFFEE and sip said coffee and harass dooskbot"
        T.post('statuses/update', {
            status: tweet
        })
    } if (now === "8:37 AM") {
        let tweet = "got my croissant! fuck you @dooskbot, get a fucking watch"
        T.post('statuses/update', {
            status: tweet,
        })
    } if (now === "8:57 AM") {
        let tweet = "let's go to work!"
        T.post('statuses/update', {
            status: tweet
        })
    }
}

module.exports = {
    tickTock
}
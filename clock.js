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
    } if (now === "5:55 AM") {
        let ending = dictionary.ending()
        let tweet = "happy morning time now here we go " + ending
        T.post('statuses/update', {
            status: tweet,
        })
    } if (now === "6:25 AM") {
        let ending = dictionary.ending()
        let tweet = "fell back asleep haha what a world " + ending
        T.post('statuses/update', {
            status: tweet
        })
    } if (now === "7:32 AM") {
        let tweet = "gonna go get that croissant!"
        T.post('statuses/update', {
            status: tweet,
        })
    } if (now === "8:10 AM") {
        let adj = dictionary.adjective()
        let tweet = "got that " + adj + " croissant!"
        T.post('statuses/update', {
            status: tweet
        })
    } if (now === "8:13 AM") {
        let tweet = "heading back home now, croissant in hand!"
        T.post('statuses/update', {
            status: tweet
        })
    } if (now === "8:52 AM") {
        let tweet = "lmao i dont have hands omg"
        T.post('statuses/update', {
            status: tweet
        })
    } if (now === "9:15 AM") {
        let tweet = "waka waka am i right @andrea_oaks haha dont bother replying bc im legally not allowed to see your tweets haha DRATS!!"
        T.post('statuses/update', {
            status: tweet
        })
    }
}

module.exports = {
    tickTock
}
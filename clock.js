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
    }
}

module.exports = {
    tickTock
}
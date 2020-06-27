// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------- DOOSKBOT main script -----------------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// API stuff -------------------------------------------------------------
// dotenv for twitter keys
require('dotenv').config()
// That good good tweet.js
const makeTweet = require('./tweet')
// The actual Twitter API
const Twit = require('twit')

// // That classic reply.js
const reply = require('./reply')
// Express server info
const express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// -----------------------------------------------------------------------
// Twitter login credentials for Dooskbot; switch accounts with var beta
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
console.log(T)
// TWEETS ----------------------------------------------------------------
// Makes and sends out a tweet
function go() {
    let tweet = makeTweet.tweet()
    T.post('statuses/update', {
        status: tweet
    })
    console.log(tweet)
}

// STREAMS ----------------------------------------------------------------
// sets up stream to listen for replies; could be used to listen for other 
// things in future



// Timing for functional parts of DOOSKBOT, runs on server
app.listen(PORT, function () {
    setTimeout(go, 2000)
    setTimeout(reply.stream, 3000)
    setInterval(go, 3600000)
})

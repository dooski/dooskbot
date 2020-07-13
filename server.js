// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------- DOOSKBOT main script -----------------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// server enviornment set up
// dotenv for twitter keys
require('dotenv').config()
// Express server info
const express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// mongoose info
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dooskbot", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
// Twitter API
const Twit = require('twit')

// determines if tweeting from dooskbeta or not; change value in betaCheck()
// must be done before requiring local modules 
var T = betaCheck(true)
function betaCheck(beta) {
    if (beta === true) {
        let T = new Twit({
            consumer_key: process.env.KEYBETA,
            consumer_secret: process.env.KEYBETA_SECRET,
            access_token: process.env.TOKENBETA,
            access_token_secret: process.env.TOKENBETA_SECRET
        })
        console.log("DOOSKBETA IS IN THE HOUSE")
        return T
    } else {
        let T = new Twit({
            consumer_key: process.env.KEY,
            consumer_secret: process.env.KEY_SECRET,
            access_token: process.env.TOKEN,
            access_token_secret: process.env.TOKEN_SECRET
        })
        console.log("DOOSKBOT TIME")
        return T
    }
}
module.exports = T

// local modules
// tweet.js generates tweet content
const makeTweet = require('./tweet')
// clock.js is in beta; tweets at specific times of day
const clock = require('./clock')
// reply.js monitors for replies to dooskbot tweets
const reply = require('./reply')
// follow.js follows lmao
const follow = require('./follow')
// -----------------------------------------------------------------------

// TWEETS ----------------------------------------------------------------
// Makes and sends out a tweet
function go() {
    let tweet = makeTweet.tweet()
    T.post('statuses/update', {
        status: tweet
    })
    console.log(tweet)
}


// Timing for functional parts of DOOSKBOT, runs on server
app.listen(PORT, function () {
    setTimeout(go, 2000)
    setTimeout(reply.stream, 3000)
    setTimeout(follow.feed, 4000)
    setInterval(go, 3800000)
    setInterval(clock.tickTock, 58000)
})


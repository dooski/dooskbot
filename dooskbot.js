// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------- DOOSKBOT main script -----------------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// API stuff -------------------------------------------------------------
// That good good tweet.js
const makeTweet = require('./tweet')
// // That classic reply.js
const reply = require('./reply')
// The actual Twitter API
const Twit = require('twit')
// Express server info
const express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// -----------------------------------------------------------------------
// Twitter login credentials for Dooskbot
let T = new Twit({
    consumer_key: process.env.KEY,
    consumer_secret: process.env.KEY_SECRET,
    access_token: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRET
})

// TWEETS ----------------------------------------------------------------
// Makes and sends out a tweet
function go() {
    let tweet = makeTweet.tweet();
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
    setTimeout(reply.stream, 1000)
    setInterval(go, 3600000)
})
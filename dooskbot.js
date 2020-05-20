//calls the tweet generation code
const makeTweet = require('./tweet')
//calls the reply functionality
const reply = require('./reply')
// //API key
// const key = require('./key')
const Twit = require('twit')
//logging
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
log4js.configure({
    appenders: { all: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['all'], level: 'debug' } }
});
//server
const express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// let T = key.T
let T = new Twit({
    consumer_key: process.env.KEY,
    consumer_secret: process.env.KEY_SECRET,
    access_token: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRET
})

// TWEETS
function go() {
    //runs tweet.js to create tweet
    let tweet = makeTweet.tweet();
    //sends out returned tweet
    T.post('statuses/update', {
        status: tweet
    })

    //logs out sent tweet
    console.log(tweet)
}


// STREAMS
// sets up stream to listen for replies; could be used to listen for other things in future



//timing for tweeting and stream
app.listen(PORT, function () {
    setTimeout(go, 2000)
    setTimeout(reply.stream, 1000)
    setInterval(go, 3600000)
})
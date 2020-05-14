
//calls the tweet generation code
const dooskbot = require('./dooskbot')
//calls the reply functionality
const reply = require('./reply')
// calls the dictionary
const dictionary = require('./dictionary')
//calls the Twitter API
const Twit = require('twit');
//API key
// const key = require('./key')
const aws = require('aws-sdk');
const express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

let T = new aws.S3({
    consumer_key: process.env.KEY,
    consumer_secret: process.env.KEY_SECRET,
    access_token: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRET
});

// TWEETS
function go() {
    //runs dooskbot.js to create tweet

    let tweet = dooskbot.dooskbot();

    //sends out returned tweet
    T.post('statuses/update', {
        status: tweet
    })

    //logs out sent tweet
    console.log(tweet)
}


// STREAMS
// sets up stream to listen for replies; could be used to listen for other things in future

function streamStart() {
    var start = reply.start
}


//timing for tweeting and stream
app.listen(PORT, function () {
    setTimeout(go, 2000)
    setTimeout(streamStart, 1000)
    setInterval(go, 3600000)
})
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

//calls the tweet generation code
const dooskbot = require('./dooskbot')
//calls the reply functionality
const reply = require('./reply')
// calls the dictionary
const dictionary = require('./dictionary')
//calls the Twitter API
const Twit = require('twit');
//API key
const key = require('./key')
let T = key.T

// TWEETS
function process() {
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
  setTimeout(process, 2000)
  setTimeout(streamStart, 1000)
  setInterval(process, 3600000)
})
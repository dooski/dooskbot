//calls the tweet generation code
const dooskbot = require('./dooskbot')
//calls the Twitter API
const Twit = require('twit');
//API key
const key = require('./key')
let T = key.T

// TWEETS
function process() {
  //runs dooskbot.js to create tweet

  let tweet = dooskbot.tweet;

  //sends out returned tweet
  T.post('statuses/update', {
    status: tweet
  })

  //logs out sent tweet
  console.log(tweet)
}


// STREAMS
// sets up stream to listen for replies; could be used to listen for other things in future
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

    // when dooskbot is mentioned:
    function tweetEvent(tweet) {
      // who the tweet is from (not used right now, but might be used in the future)
      var name = tweet.user.screen_name;
      // the tweet that will be responded to
      var nameID = tweet.id_str;
      // sends to dooskbot.js to make a reply (HAS NOT BEEN MADE YET)
      let reply = dooskbot.reply;
      // params for sending tweet; status is actual tweet, in_reply... is for which tweet its replying to
      var params = {
        status: reply,
        in_reply_to_status_id: nameID
      };
      // sends tweet
      T.post('statuses/update', params, function (err, data, response) {
        if (err !== undefined) {
          console.log(err);
        } else {
          console.log('Tweeted: ' + params.status);
        }
      })
    };
  }
}

//timing for tweeting and stream
setTimeout(process, 2000)
setTimeout(stream, 2000)
setInterval(process, 3600000)
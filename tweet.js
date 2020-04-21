const dooskbot = require('./dooskbot')
const Twit = require('twit');

var T = new Twit({
  consumer_key: 'MxxAz1Qiy2syu9DnepL7Cm5rm',
  consumer_secret: 'n6Wrjkzm3SU5xTM53QenVuQuvDHRPkHD3Ms8zlm8S3MqNS4Vm3',
  access_token: '1232125524035723270-qW48ORdFQCSCJ1FNlfcDT0rzZ1y6Gm',
  access_token_secret: 'I1dT9knpbsGmckVqsrpikKMM7XIAypxmtpop5MAe1nZ2L'
})
var tweet = dooskbot.tweet;
T.post('statuses/update', {
  status: tweet
})
console.log(tweet)

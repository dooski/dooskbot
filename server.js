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
async function go() {
    const tweet = await makeTweet.tweet(null)
    T.post('statuses/update', {
        status: tweet
    })
    console.log(tweet)
}
function taunt() {
    T.post('statuses/update', {
        status: "gettttttttttttt DUNKED ON @twitter"
    })
}


// Timing for functional parts of DOOSKBOT, runs on server
app.listen(PORT, function () {
    setTimeout(reply.stream, 3000)
    setTimeout(follow.feed, 4000)
    setInterval(go, 3800000)
    taunt()
    setInterval(clock.tickTock, 58000)
})

// DOOSKORD ------------------------------------------------------------
// discord.js to interact with Discord API
const Discord = require('discord.js');
// client connection
const client = new Discord.Client();
const request = require('request');
// dooskord.json info
// const info = require('./dooskord.json')
// dictionary
const dictionary = require('./dictionary.js')

var beginnings = ["look, ", "hey sooo ", "hi, ", "oh, ", "YOOO "]

client.once('ready', () => {
    console.log('Ready!');
    // client.channels.cache.get("732639737369853963").send(":)")

});

setTimeout(check, 10000)
setInterval(check, 4140000)
client.on('message', message => {
    z = makeTweet.zp(5)
    if (message.content.includes("?") === true) {
        let answer = dictionary.answer()
        message.channel.send(answer)
    }
    else if (message.author.username === "chippicus") {
        message.channel.send("chip, my " + dictionary.personSingular() + ", " + makeTweet.talk(19) + "!")
    } else if (message.author.username === "CrimockLyte") {
        message.channel.send("chowdah!")
    } else if (message.author.username === "hellotherelydia") {
        if (z === 0) {
            message.channel.send("more like squidia! " + dictionary.ending())
        } else message.channel.send("so, " + makeTweet.talk(20))
        // } else if (message.author.username === "dooski") {
        //     message.channel.send(dictionary.lemongrab())
    }
    else if (message.author.username !== "Dooskbot") {
        let beginning = beginnings[z]
        message.channel.send(beginning + message.author.username + "! " + makeTweet.talk(20) + "!")
    }
})

function check() {
    request("https://api.openweathermap.org/data/2.5/weather?appid=09bbdc4243d49ba72f9cfcde4484f728&q=buttzville&units=imperial", { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body.main.temp);
        if (body.main.temp >= 69 && body.main.temp < 70) {
            client.channels.cache.get("732639737369853963").send("Heyoooo, it's 69 degrees in Buttzville, NJ!")
            console.log("woot")
        }
        else {
            console.log("womp")
        }
    });
}


//logs in with token
client.login(process.env.DISC_TOKEN)


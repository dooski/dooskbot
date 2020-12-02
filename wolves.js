require('dotenv').config()

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

class Wolf {
    constructor(mood, moxie, accuracy, willpower, influence) {
        this.mood = mood;
        this.moxie = moxie;
        this.accuracy = accuracy;
        this.willpower = willpower;
        this.influence = influence;
    }

    printInfo() {
        console.log(`The ${this.mood} wolf, with ${this.moxie} moxie points and a ${this.accuracy} rating, ${this.willpower} willpower points and a base influence of ${this.influence}`);
    }
}

function battle(dope, chill) {
    T.post('statuses/update', {
        status: "There are two wolves inside me, and they're about to throwdown. Dope Wolf vs Chill Wolf."
    })
    let dopePower = dope.willpower;
    let chillPower = chill.willpower;
    let round = 1
    for (let i = 1; dopePower > 0 && chillPower > 0; i++) {
        dopeDoesHit = doesHit(dope.mood, dope.accuracy, i, round);
        chillDoesHit = doesHit(chill.mood, chill.accuracy, i, round);
        round = round + 1
        let goesFirst = zp(2)
        if (goesFirst == 1) {
            if (chillDoesHit == true) {
                dopePower = dopePower - chill.moxie
                if (dopePower > 0) {
                    report(`Uh oh! The chill wolf strikes! Dope wolf's willpower reduced to ${dopePower}!`, i)
                }
                if (dopePower <= 0) {
                    report(`The chill wolf issues the coup de grace! Dope wolf is dead after ${round} rounds.`, i)
                    break
                }
            }
        }
        if (goesFirst == 2) {
            if (dopeDoesHit == true) {
                chillPower = chillPower - dope.moxie
                if (chillPower > 0) {
                    report(`Uh oh! The dope wolf strikes! Chill wolf's willpower reduced to ${chillPower}!`, i)
                }
                if (chillPower <= 0) {
                    report(`The dope wolf issues the coup de grace! Chill wolf is dead after ${round} rounds.`, i)
                    break
                }
            }
        }
    }
}

function report(update, i) {
    setTimeout(function () {
        T.post('statuses/update', {
            status: update
        })
        console.log(update)
    }, i * 150000)
}

function doesHit(mood, accuracy, i, round) {
    let check = zp(100)
    if (accuracy >= check) {
        return true
    } else
        report(`Oh no! The ${mood} wolf missed! And in round ${round} no less!`, i)
    return false
}

const dope = new Wolf("dope", 50, 85, 200, 25)
const chill = new Wolf("chill", 40, 80, 240, 25)
const sad = new Wolf("sad", 200, 70, 7000, 25)
const mad = new Wolf("mad", 1000, 50, 6000, 25)

battle(dope, chill)

function zp(z) {
    return Math.floor(Math.random() * z) + 1
}
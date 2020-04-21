
const dictionary = require('./dictionary')
let tweet = dooskbot();

function dooskbot() {
    //random tweet picker
    let t = Math.floor(Math.random() * 17);

    // console.log(t)
    // console.log(" ")
    // console.log("nouns length is " + nouns.length)
    // console.log("properNouns length is " + properNouns.length)
    // console.log("verbsIng length is " + verbsIng.length)
    // console.log("verbsS length is " + verbsS.length)
    // console.log("verbsEd length is " + verbsEd.length)
    // console.log("adverbs length is " + adverbs.length)
    // console.log("adjectives length is " + adjectives.length)
    // console.log("places length is " + places.length)
    // console.log("events length is " + events.length)
    // console.log(" ")

    //shiny check
    let shiny = Math.floor(Math.random() * 70)
    if (shiny === 69) {
        console.log("shiny!")
    }
    //shiny tweet
    if (shiny === 69 && t === 4) {
        var y = Math.floor(Math.random() * properNouns.length);
        var properNoun = properNouns[y];
        let tweet = "* a shiny " + properNoun + " appears! *";
        return tweet
    }

    // tweets
    // DONT TEXT
    if (t === 0) {
        var y = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[y];
        var z = Math.floor(Math.random() * dictionary.verbsIng.length);
        var verbIng = dictionary.verbsIng[z];
        var x = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[x];
        let tweet = properNoun + " is " + verbIng + ", dont text " + ending;
        return tweet
    }

    // DOES SOMETHING
    if (t === 1) {
        var x = Math.floor(Math.random() * dictionary.adverbs.length);
        var adverb = dictionary.adverbs[x];
        var y = Math.floor(Math.random() * dictionary.verbsS.length);
        var verboS = dictionary.verbsS[y];
        var z = Math.floor(Math.random() * dictionary.places.length);
        var place = dictionary.places[z];
        let tweet = "*" + adverb + " " + verboS + " " + place + "*";
        return tweet
    }

    // AS A TREAT
    if (t === 2) {
        var y = Math.floor(Math.random() * dictionary.nouns.length);
        var noun = dictionary.nouns[y];
        var z = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[z];
        let tweet = properNoun + " can have little a " + noun + ", as a treat";
        return tweet
    }

    // ITS ABOUT
    if (t === 3) {
        var about = Math.floor(Math.random() * 2);
        //noun
        if (about === 0) {
            var y = Math.floor(Math.random() * dictionary.nouns.length);
            var noun = dictionary.nouns[y];
            let tweet = "its about the " + noun + ", send tweet";
            return tweet
        }
        //properNoun
        if (about === 1) {
            var y = Math.floor(Math.random() * dictionary.properNouns.length);
            var properNoun = dictionary.properNouns[y];
            let tweet = "its about " + properNoun + ", send tweet";
            return tweet
        }
        //verbsIng
        if (about === 2) {
            var y = Math.floor(Math.random() * dictionary.verbsIng.length);
            var verbIng = dictionary.verbsIng[y];
            let tweet = "its about " + verbIng + ", send tweet";
            return tweet
        }
    }

    // SAID TRANS RIGHTS
    if (t === 4 && shiny !== 69) {
        var y = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[y];
        var rights = ["trans rights", "trans visibility", "its my turn!", "gay rights", "bi visibility", "queer visibility", "dont worry :)"];
        var x = Math.floor(Math.random() * rights.length);
        var right = rights[x]
        let tweet = properNoun + " said " + right;
        return tweet
    }

    // THE POWER OF
    if (t === 5) {
        var x = Math.floor(Math.random() * dictionary.adjectives.length);
        var adjective = dictionary.adjectives[x];
        var y = Math.floor(Math.random() * dictionary.nouns.length);
        var noun = dictionary.nouns[y];
        let tweet = "the power of " + adjective + " " + noun + "s shines within you";
        return tweet
    }

    // SHIPPING
    if (t === 6) {
        var y = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun1 = dictionary.properNouns[y];
        var z = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun2 = dictionary.properNouns[z];
        var z1 = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[z1]
        let tweet = "i ship " + properNoun1 + " and " + properNoun2 + ", no questions " + ending;
        return tweet
    }

    // ALL NOUN KNOWS IS
    if (t === 7) {
        var x = Math.floor(Math.random() * dictionary.nouns.length);
        var noun = dictionary.nouns[x];
        var y = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[y];
        var z = Math.floor(Math.random() * dictionary.verbsIng.length);
        var verbIng = dictionary.verbsIng[z];
        var z1 = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[z1]
        let tweet = "all " + properNoun + " knows is " + noun + " and " + verbIng + " " + ending;
        return tweet
    }

    // IN MY TOWN
    if (t === 8) {
        var x = Math.floor(Math.random() * dictionary.nouns.length);
        var noun = dictionary.nouns[x];
        var y = Math.floor(Math.random() * dictionary.adjectives.length);
        var adjective = dictionary.adjectives[y];
        let tweet = noun + "? in my " + adjective + " town????";
        return tweet
    }

    // WHAT IF WE
    if (t === 9) {
        var x = Math.floor(Math.random() * dictionary.verbsEd.length);
        var verbEd = dictionary.verbsEd[x];
        var y = Math.floor(Math.random() * dictionary.places.length);
        var place = dictionary.places[y];
        let tweet = "what if we " + verbEd + " " + place + "? haha just kidding............ unless?";
        return tweet
    }

    //MAYBE THE REAL
    if (t === 10) {
        var x = Math.floor(Math.random() * dictionary.nouns.length);
        var noun = nouns[x];
        var y = Math.floor(Math.random() * dictionary.nouns.length);
        var noun2 = dictionary.nouns[y];
        var z1 = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[z1]
        let tweet = "maybe the real " + noun + " was the " + noun2 + " we made along the way " + ending;
        return tweet
    }

    //FILLS YOU WITH DETERMINATION
    if (t === 11) {
        var x = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[x];
        var y = Math.floor(Math.random() * dictionary.adverbs.length);
        var adverb = dictionary.adverbs[y];
        var z = Math.floor(Math.random() * dictionary.verbsIng.length);
        var verb = dictionary.verbsIng[z];
        let tweet = "the sight of " + properNoun + " " + adverb + " " + verb + "; it fills me with determination"
        return tweet
    }

    // HOT TAKE
    if (t === 12) {
        var x = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[x];
        var y = Math.floor(Math.random() * dictionary.adjectives.length);
        var adjective = dictionary.adjectives[y];
        var z = Math.floor(Math.random() * dictionary.nouns.length);
        var noun = dictionary.nouns[z];
        var z1 = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[z1]
        let tweet = "not to get all " + adjective + " on main, but " + properNoun + " is not your " + noun + " " + ending;
        return tweet
    }

    // BLANK DID BLANK
    if (t === 13) {
        var x = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[x];
        var y = Math.floor(Math.random() * dictionary.events.length);
        var event = dictionary.events[y];
        var z = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[z];
        let tweet = properNoun + " did " + event + ending;
        return tweet
    }

    // PUTTING ME ON BLAST
    if (t === 14) {
        var y = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[y];
        var z = Math.floor(Math.random() * dictionary.verbsIng.length);
        var verbIng = dictionary.verbsIng[z];
        var x = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[x];
        let tweet = "why is " + properNoun + " putting me on blast for " + verbIng + " ???? " + ending;
        return tweet
    }

    // SAME AS IT EVER WAS
    if (t === 15) {
        var y = Math.floor(Math.random() * dictionary.verbsIng.length);
        var verbIng = dictionary.verbsIng[y];
        var x = Math.floor(Math.random() * dictionary.places.length);
        var place = dictionary.places[x];
        let tweet = "and you may find yourself " + verbIng + " " + place;
        return tweet
    }

    // MOM CAN YOU PICK ME UP
    if (t === 16) {
        var y = Math.floor(Math.random() * dictionary.verbsIng.length);
        var verbIng = dictionary.verbsIng[y];
        var x = Math.floor(Math.random() * dictionary.properNouns.length);
        var properNoun = dictionary.properNouns[x];
        var z = Math.floor(Math.random() * dictionary.endings.length);
        var ending = dictionary.endings[z]
        let tweet = "mom can you pick me up? " + properNoun + " is " + verbIng + " " + ending;
        return tweet
    }
}

module.exports = {
    tweet
}
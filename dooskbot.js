//calls dictionary.js for all word objects
const dictionary = require('./dictionary')
//creates tweet or reply to return to tweet.js
//tweet generation function
function dooskbot() {
    //generates a random number between 0 and 16 to pick one 
    //of the 17 tweet formats
    let t = Math.floor(Math.random() * 17);

    //shiny check; generates a number between 0 annd 69; if shiny = 69
    //and t = 4, dooskbot returns a shiny tweet!
    let shiny = Math.floor(Math.random() * 70)
    if (shiny === 69) {
        console.log("shiny!")
    }

    //shiny tweet generation
    if (shiny === 69 && t === 4) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let tweet = "* a shiny " + properNoun + " appears! *";
        return tweet
    }

    // standard tweet formats (not shiny)
    // 1. DONT TEXT
    if (t === 0) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[a];
        let b = Math.floor(Math.random() * dictionary.verbsIng.length);
        let verbIng = dictionary.verbsIng[b];
        let c = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[c];
        let tweet = properNoun + " is " + verbIng + ", dont text " + ending;
        return tweet
    }

    // 2. DOES SOMETHING
    if (t === 1) {
        let a = Math.floor(Math.random() * dictionary.adverbs.length);
        let adverb = dictionary.adverbs[a];
        let b = Math.floor(Math.random() * dictionary.verbsS.length);
        let verboS = dictionary.verbsS[b];
        let c = Math.floor(Math.random() * dictionary.places.length);
        let place = dictionary.places[c];
        let tweet = "*" + adverb + " " + verboS + " " + place + "*";
        return tweet
    }

    // 3. AS A TREAT
    if (t === 2) {
        let a = Math.floor(Math.random() * dictionary.nouns.length);
        let noun = dictionary.nouns[a];
        let b = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[b];
        let tweet = properNoun + " can have little a " + noun + ", as a treat";
        return tweet
    }

    // 4. ITS ABOUT
    if (t === 3) {
        let about = Math.floor(Math.random() * 2);
        //uses common noun
        if (about === 0) {
            let a = Math.floor(Math.random() * dictionary.nouns.length);
            let noun = dictionary.nouns[a];
            let tweet = "its about the " + noun + ", send tweet";
            return tweet
        }
        //uses proper noun
        if (about === 1) {
            let a = Math.floor(Math.random() * dictionary.properNouns.length);
            let properNoun = dictionary.properNouns[a];
            let tweet = "its about " + properNoun + ", send tweet";
            return tweet
        }
        //uses a verbsIng phrase
        if (about === 2) {
            let a = Math.floor(Math.random() * dictionary.verbsIng.length);
            let verbIng = dictionary.verbsIng[a];
            let tweet = "its about " + verbIng + ", send tweet";
            return tweet
        }
    }

    // 5. ___ SAID ____ RIGHTS
    if (t === 4 && shiny !== 69) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[a];
        let rights = ["trans rights", "trans visibility", "its my turn!", "gay rights", "bi visibility", "queer visibility", "dont worry :)"];
        let b = Math.floor(Math.random() * rights.length);
        let right = rights[b]
        let tweet = properNoun + " said " + right;
        return tweet
    }

    // 6. THE POWER OF
    if (t === 5) {
        let a = Math.floor(Math.random() * dictionary.adjectives.length);
        let adjective = dictionary.adjectives[a];
        let b = Math.floor(Math.random() * dictionary.nouns.length);
        let noun = dictionary.nouns[b];
        let tweet = "the power of " + adjective + " " + noun + "s shines within you";
        return tweet
    }

    // 7. SHIPPING
    if (t === 6) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun1 = dictionary.properNouns[a];
        let b = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun2 = dictionary.properNouns[b];
        let c = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[c]
        let tweet = "i ship " + properNoun1 + " and " + properNoun2 + ", no questions " + ending;
        return tweet
    }

    // 8. ALL blank KNOWS IS
    if (t === 7) {
        let a = Math.floor(Math.random() * dictionary.nouns.length);
        let noun = dictionary.nouns[a];
        let b = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[b];
        let c = Math.floor(Math.random() * dictionary.verbsIng.length);
        let verbIng = dictionary.verbsIng[c];
        let d = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[d]
        let tweet = "all " + properNoun + " knows is " + noun + " and " + verbIng + " " + ending;
        return tweet
    }

    // 9. IN MY TOWN????
    if (t === 8) {
        let a = Math.floor(Math.random() * dictionary.nouns.length);
        let noun = dictionary.nouns[a];
        let b = Math.floor(Math.random() * dictionary.adjectives.length);
        let adjective = dictionary.adjectives[b];
        let tweet = noun + "? in my " + adjective + " town????";
        return tweet
    }

    // 10. WHAT IF WE
    if (t === 9) {
        let a = Math.floor(Math.random() * dictionary.verbsEd.length);
        let verbEd = dictionary.verbsEd[a];
        let b = Math.floor(Math.random() * dictionary.places.length);
        let place = dictionary.places[b];
        let tweet = "what if we " + verbEd + " " + place + "? haha just kidding............ unless?";
        return tweet
    }

    // 11. MAYBE THE REAL
    if (t === 10) {
        let a = Math.floor(Math.random() * dictionary.nouns.length);
        let noun = dictionary.nouns[a];
        let b = Math.floor(Math.random() * dictionary.nouns.length);
        let noun2 = dictionary.nouns[b];
        let c = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[c]
        let tweet = "maybe the real " + noun + " was the " + noun2 + " we made along the way " + ending;
        return tweet
    }

    // 12. FILLS YOU WITH DETERMINATION
    if (t === 11) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[a];
        let b = Math.floor(Math.random() * dictionary.adverbs.length);
        let adverb = dictionary.adverbs[b];
        let c = Math.floor(Math.random() * dictionary.verbsIng.length);
        let verb = dictionary.verbsIng[c];
        let tweet = "the sight of " + properNoun + " " + adverb + " " + verb + "; it fills me with determination"
        return tweet
    }

    // 13. HOT TAKE
    if (t === 12) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[a];
        let b = Math.floor(Math.random() * dictionary.adjectives.length);
        let adjective = dictionary.adjectives[b];
        let c = Math.floor(Math.random() * dictionary.nouns.length);
        let noun = dictionary.nouns[c];
        let d = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[d]
        let tweet = "not to get all " + noun + ", but " + properNoun + " is not really " + adjective + " " + ending;
        return tweet
    }

    // 14. blank DID blank
    if (t === 13) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[a];
        let b = Math.floor(Math.random() * dictionary.events.length);
        let event = dictionary.events[b];
        let c = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[c];
        let tweet = properNoun + " did " + event + ending;
        return tweet
    }

    // 15. PUTTING ME ON BLAST
    if (t === 14) {
        let a = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[a];
        let b = Math.floor(Math.random() * dictionary.verbsIng.length);
        let verbIng = dictionary.verbsIng[b];
        let c = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[c];
        let tweet = "why is " + properNoun + " putting me on blast for " + verbIng + " ???? " + ending;
        return tweet
    }

    // 16. SAME AS IT EVER WAS
    if (t === 15) {
        let a = Math.floor(Math.random() * dictionary.verbsIng.length);
        let verbIng = dictionary.verbsIng[a];
        let b = Math.floor(Math.random() * dictionary.places.length);
        let place = dictionary.places[b];
        let tweet = "and you may find yourself " + verbIng + " " + place;
        return tweet
    }

    // 17. MOM CAN YOU PICK ME UP
    if (t === 16) {
        let a = Math.floor(Math.random() * dictionary.verbsIng.length);
        let verbIng = dictionary.verbsIng[a];
        let b = Math.floor(Math.random() * dictionary.properNouns.length);
        let properNoun = dictionary.properNouns[b];
        let c = Math.floor(Math.random() * dictionary.endings.length);
        let ending = dictionary.endings[c]
        let tweet = "mom can you pick me up? " + properNoun + " is " + verbIng + " " + ending;
        return tweet
    }
}


module.exports = {
    dooskbot
}
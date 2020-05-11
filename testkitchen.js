var tweet = dooskbot()

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
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let tweet = "* a shiny " + properNoun + " appears! *";
        return tweet
    }

    // tweets
    // DONT TEXT
    if (t === 0) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let b = Math.floor(Math.random() * verbsIng.length);
        let verbIng = verbsIng[b];
        let c = Math.floor(Math.random() * endings.length);
        let ending = endings[c];
        let tweet = properNoun + " is " + verbIng + ", dont text " + ending;
        return tweet
    }

    // DOES SOMETHING
    if (t === 1) {
        let a = Math.floor(Math.random() * adverbs.length);
        let adverb = adverbs[a];
        let b = Math.floor(Math.random() * verbsS.length);
        let verboS = verbsS[b];
        let c = Math.floor(Math.random() * places.length);
        let place = places[c];
        let tweet = "*" + adverb + " " + verboS + " " + place + "*";
        return tweet
    }

    // AS A TREAT
    if (t === 2) {
        let a = Math.floor(Math.random() * nouns.length);
        let noun = nouns[a];
        let b = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[b];
        let tweet = properNoun + " can have little a " + noun + ", as a treat";
        return tweet
    }

    // ITS ABOUT
    if (t === 3) {
        let about = Math.floor(Math.random() * 2);
        //noun
        if (about === 0) {
            let a = Math.floor(Math.random() * nouns.length);
            let noun = nouns[a];
            let tweet = "its about the " + noun + ", send tweet";
            return tweet
        }
        //properNoun
        if (about === 1) {
            let a = Math.floor(Math.random() * properNouns.length);
            let properNoun = properNouns[a];
            let tweet = "its about " + properNoun + ", send tweet";
            return tweet
        }
        //verbsIng
        if (about === 2) {
            let a = Math.floor(Math.random() * verbsIng.length);
            let verbIng = verbsIng[a];
            let tweet = "its about " + verbIng + ", send tweet";
            return tweet
        }
    }

    // SAID TRANS RIGHTS
    if (t === 4 && shiny !== 69) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let rights = ["trans rights", "trans visibility", "its my turn!", "gay rights", "bi visibility", "queer visibility", "dont worry :)"];
        let b = Math.floor(Math.random() * rights.length);
        let right = rights[b]
        let tweet = properNoun + " said " + right;
        return tweet
    }

    // THE POWER OF
    if (t === 5) {
        let a = Math.floor(Math.random() * adjectives.length);
        let adjective = adjectives[a];
        let b = Math.floor(Math.random() * nouns.length);
        let noun = nouns[b];
        let tweet = "the power of " + adjective + " " + noun + "s shines within you";
        return tweet
    }

    // SHIPPING
    if (t === 6) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun1 = properNouns[a];
        let b = Math.floor(Math.random() * properNouns.length);
        let properNoun2 = properNouns[b];
        let c = Math.floor(Math.random() * endings.length);
        let ending = endings[c]
        let tweet = "i ship " + properNoun1 + " and " + properNoun2 + ", no questions " + ending;
        return tweet
    }

    // ALL NOUN KNOWS IS
    if (t === 7) {
        let a = Math.floor(Math.random() * nouns.length);
        let noun = nouns[a];
        let b = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[b];
        let c = Math.floor(Math.random() * verbsIng.length);
        let verbIng = verbsIng[c];
        let d = Math.floor(Math.random() * endings.length);
        let ending = endings[d]
        let tweet = "all " + properNoun + " knows is " + noun + " and " + verbIng + " " + ending;
        return tweet
    }

    // IN MY TOWN
    if (t === 8) {
        let a = Math.floor(Math.random() * nouns.length);
        let noun = nouns[a];
        let b = Math.floor(Math.random() * adjectives.length);
        let adjective = adjectives[b];
        let tweet = noun + "? in my " + adjective + " town????";
        return tweet
    }

    // WHAT IF WE
    if (t === 9) {
        let a = Math.floor(Math.random() * verbsEd.length);
        let verbEd = verbsEd[a];
        let b = Math.floor(Math.random() * places.length);
        let place = places[b];
        let tweet = "what if we " + verbEd + " " + place + "? haha just kidding............ unless?";
        return tweet
    }

    //MAYBE THE REAL
    if (t === 10) {
        let a = Math.floor(Math.random() * nouns.length);
        let noun = nouns[a];
        let b = Math.floor(Math.random() * nouns.length);
        let noun2 = nouns[b];
        let c = Math.floor(Math.random() * endings.length);
        let ending = endings[c]
        let tweet = "maybe the real " + noun + " was the " + noun2 + " we made along the way " + ending;
        return tweet
    }

    //FILLS YOU WITH DETERMINATION
    if (t === 11) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let b = Math.floor(Math.random() * adverbs.length);
        let adverb = adverbs[b];
        let c = Math.floor(Math.random() * verbsIng.length);
        let verb = verbsIng[c];
        let tweet = "the sight of " + properNoun + " " + adverb + " " + verb + "; it fills me with determination"
        return tweet
    }

    // HOT TAKE
    if (t === 12) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let b = Math.floor(Math.random() * adjectives.length);
        let adjective = adjectives[b];
        let c = Math.floor(Math.random() * nouns.length);
        let noun = nouns[c];
        let d = Math.floor(Math.random() * endings.length);
        let ending = endings[d]
        let tweet = "not to get all " + adjective + " on main, but " + properNoun + " is not your " + noun + " " + ending;
        return tweet
    }

    // BLANK DID BLANK
    if (t === 13) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let b = Math.floor(Math.random() * events.length);
        let event = events[b];
        let c = Math.floor(Math.random() * endings.length);
        let ending = endings[c];
        let tweet = properNoun + " did " + event + ending;
        return tweet
    }

    // PUTTING ME ON BLAST
    if (t === 14) {
        let a = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[a];
        let b = Math.floor(Math.random() * verbsIng.length);
        let verbIng = verbsIng[b];
        let c = Math.floor(Math.random() * endings.length);
        let ending = endings[c];
        let tweet = "why is " + properNoun + " putting me on blast for " + verbIng + " ???? " + ending;
        return tweet
    }

    // SAME AS IT EVER WAS
    if (t === 15) {
        let a = Math.floor(Math.random() * verbsIng.length);
        let verbIng = verbsIng[a];
        let b = Math.floor(Math.random() * places.length);
        let place = places[b];
        let tweet = "and you may find yourself " + verbIng + " " + place;
        return tweet
    }

    // MOM CAN YOU PICK ME UP
    if (t === 16) {
        let a = Math.floor(Math.random() * verbsIng.length);
        let verbIng = verbsIng[a];
        let b = Math.floor(Math.random() * properNouns.length);
        let properNoun = properNouns[b];
        let c = Math.floor(Math.random() * endings.length);
        let ending = endings[c]
        let tweet = "mom can you pick me up? " + properNoun + " is " + verbIng + " " + ending;
        return tweet
    }
}
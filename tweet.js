//calls dictionary.js for all word objects
const dictionary = require('./dictionary')
//creates tweet to return to tweet.js
//tweet generation function
function tweet() {
    // generates a random number between 0 and 18 to pick one 
    // of the 18 tweet formats
    let t = Math.floor(Math.random() * 19);

    //shiny check; generates a number between 0 annd 69; if shiny = 69
    //and t = 4, dooskbot returns a shiny tweet!
    let shiny = Math.floor(Math.random() * 70)
    if (shiny === 69) {
        console.log("shiny!")
    }

    //shiny tweet generation
    if (shiny === 69 && t === 4) {
        let person = dictionary.realPerson()
        let tweet = "* a shiny " + person + " appears! *";
        return tweet
    }

    // standard tweet formats (not shiny)
    // 1. DONT TEXT
    if (t === 0) {
        let person = dictionary.realPerson()
        let verbIng = dictionary.verbIng()
        let ending = dictionary.ending()
        let tweet = person + " is " + verbIng + ", dont text " + ending;
        return tweet
    }

    // 2. DOES SOMETHING
    if (t === 1) {
        let adverb = dictionary.adverb()
        let verb = dictionary.verbPersonPast()
        let person = dictionary.realPerson()
        let place = dictionary.placePrep()
        let tweet = "*" + adverb + " " + verb + " " + person + " " + place + "*";
        return tweet
    }

    // 3. AS A TREAT
    if (t === 2) {
        let person = dictionary.realPerson();
        let thing = dictionary.thingSingular()
        let tweet = person + " can have little a " + thing + ", as a treat";
        return tweet
    }

    // 4. ITS ABOUT
    if (t === 3) {
        let about = Math.floor(Math.random() * 2);
        //uses plural noun
        if (about === 0) {
            let thing = dictionary.thingPlural()
            let tweet = "its about the " + thing + ", send tweet";
            return tweet
        }
        //uses plural person
        if (about === 1) {
            let people = dictionary.personPlural()
            let tweet = "its about all the " + people + ", send tweet";
            return tweet
        }
        //uses a place
        if (about === 2) {
            let place = dictionary.placeSolo()
            let tweet = "its about the " + place + ", send tweet";
            return tweet
        }
    }

    // 5. ___ SAID ____ RIGHTS
    if (t === 4 && shiny !== 69) {
        let person = dictionary.realPerson()
        let rights = ["trans rights", "trans visibility", "its my turn!", "gay rights", "bi visibility", "queer visibility", "dont worry :)"];
        let b = Math.floor(Math.random() * rights.length);
        let right = rights[b]
        let tweet = person + " said " + right;
        return tweet
    }

    // 6. THE POWER OF
    if (t === 5) {
        let adjective = dictionary.adjective()
        let thing = dictionary.thingPlural()
        let tweet = "the power of " + adjective + " " + thing + " shines within you";
        return tweet
    }

    // 7. SHIPPING
    if (t === 6) {
        let person1 = dictionary.realPerson()
        let person2 = dictionary.realPerson()
        let ending = dictionary.ending()
        let tweet = "i ship " + person1 + " and " + person2 + ", " + ending;
        return tweet
    }

    // 8. ALL blank KNOWS IS
    if (t === 7) {
        let person = dictionary.realPerson()
        let thing = dictionary.thingSingular()
        let people = dictionary.personPlural()
        let ing = dictionary.verbIng()
        let ending = dictionary.ending()
        let tweet = "all " + person + " knows is " + thing + ", " + people + " and " + ing + " " + ending;
        return tweet
    }

    // 9. IN MY TOWN????
    if (t === 8) {
        let thing = dictionary.thingPlural()
        let adjective = dictionary.adjective()
        let place = dictionary.placeSolo()
        let tweet = thing + "? in this " + adjective + " " + place + "???";
        return tweet
    }

    // 10. WHAT IF WE
    if (t === 9) {
        let verb = dictionary.verbPersonPast()
        let person = dictionary.realPerson()
        let place = dictionary.placePrep()
        let tweet = "what if we " + verb + " " + person + " " + place + "? haha just kidding............ unless?";
        return tweet
    }

    // 11. MAYBE THE REAL
    if (t === 10) {
        let thing = dictionary.thingSingular()
        let things = dictionary.thingPlural()
        let verb = dictionary.verbObjectPast()
        let ending = dictionary.ending()
        let tweet = "maybe the real " + thing + " was all the " + things + " we " + verb + " along the way " + ending;
        return tweet
    }

    // 12. FILLS YOU WITH DETERMINATION
    if (t === 11) {
        let person = dictionary.realPerson()
        let adverb = dictionary.adverb()
        let verb = dictionary.verbIng()
        let tweet = "the sight of " + person + " " + adverb + " " + verb + "; it fills me with determination"
        return tweet
    }

    // 13. HOT TAKE
    if (t === 12) {
        let state = dictionary.state()
        let adjective = dictionary.adjective()
        let realPerson = dictionary.realPerson()
        let ending = dictionary.ending()
        let tweet = "not to get all " + state + ", but " + realPerson + " is not really " + adjective + " " + ending;
        return tweet
    }

    // 14.life is just
    if (t === 13) {
        let verb1 = dictionary.verbPersonFirst();
        let people = dictionary.personPlural();
        let ing = dictionary.verbIng();
        let verb2 = dictionary.verbObjectFirst();
        let thing = dictionary.thingSingular()
        let tweet = "life is really just *" + verb1 + " " + people + "* *" + ing + "* *" + verb2 + " " + thing + "*"
        return tweet
    }

    // 15. PUTTING ME ON BLAST
    if (t === 14) {
        let person = dictionary.realPerson()
        let ing = dictionary.verbIng()
        let ending = dictionary.ending()
        let tweet = "why is " + person + " putting me on blast for " + ing + " ???? " + ending;
        return tweet
    }

    // 16. SAME AS IT EVER WAS
    if (t === 15) {
        let ing = dictionary.verbIng()
        let place = dictionary.placePrep()
        let tweet = "and you may find yourself " + ing + " " + place;
        return tweet
    }

    // 17. MOM CAN YOU PICK ME UP
    if (t === 16) {
        let verbIng = dictionary.ing()
        let properNoun = dictionary.realPerson()
        let ending = dictionary.ending()
        let tweet = "mom can you pick me up? " + properNoun + " is " + verbIng + " " + ending;
        return tweet
    }

    // 18. VERBED NOUN just to VERBS again
    if (t === 17) {
        let verbEd = dictionary.verbObjectPast()
        let thing = dictionary.thingSingular()
        let verb = dictionary.generalVerb()
        let tweet = verbEd + " " + thing + " just to " + verb + " again";
        return tweet
    }
    // 19. just remembered
    if (t === 18) {
        let person = dictionary.realPerson()
        let state = dictionary.state()
        let place = dictionary.placePrep()
        let ending = dictionary.ending()
        let tweet = "just remembered when me and " + person + " got " + state + " " + place + " " + ending
        return tweet
    }
}


module.exports = {
    tweet
}
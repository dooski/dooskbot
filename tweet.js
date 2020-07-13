//calls dictionary.js for all word objects
const dictionary = require('./dictionary')

//creates tweet to return to tweet.js
//tweet generation function
function tweet() {
    // generates a random number between 0 and 22 to pick one 
    // of the 23 tweet formats
    let t = zp(23)

    //shiny check; generates a number between 0 annd 69; if shiny = 69
    //and t = 4, dooskbot returns a shiny tweet!
    let shiny = zp(60)
    if (shiny === 4) {
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
        let z = zp(3);
        //uses plural noun
        if (z === 0) {
            let thing = dictionary.thingPlural()
            let tweet = "its about the " + thing + ", send tweet";
            return tweet
        }
        //uses plural person
        if (z === 1) {
            let people = dictionary.personPlural()
            let tweet = "its about all the " + people + ", send tweet";
            return tweet
        }
        //uses a place
        if (z === 2) {
            let place = dictionary.placeSolo()
            let tweet = "its about the " + place + ", send tweet";
            return tweet
        }
    }

    // 5. ___ SAID ____ RIGHTS
    if (t === 4 && shiny !== 69) {
        let person = dictionary.realPerson()
        let rights = ["trans rights", "trans visibility", "its my turn!", "gay rights", "bi visibility", "queer visibility", "dont worry :)", "acab"];
        let z = zp(rights.length)
        let right = rights[z]
        let tweet = person + " said " + right
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
        let tweet = "i ship " + person1 + " and " + person2 + " " + ending;
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
        let verbIng = dictionary.verbIng()
        let properNoun = dictionary.realPerson()
        let ending = dictionary.ending()
        let tweet = "mom can you pick me up? " + properNoun + " is " + verbIng + " " + ending;
        return tweet
    }

    // 18. VERBED NOUN just to VERBS again
    if (t === 17) {
        let verbEd = dictionary.verbObjectPast()
        let thing = dictionary.thingSingular()
        let verb = dictionary.verbGeneral()
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

    // 20. i need to
    if (t === 19) {
        let ing = dictionary.verbIng()
        let adverb = dictionary.adverb()
        let ending = dictionary.ending()
        let tweet = "had a dream i was " + ing + " but, like, " + adverb + "???? " + ending
        return tweet
    }

    // 21. i smell / i lost / i want / i should
    if (t === 20 || t === 21 || t === 22) {
        let thing = dictionary.thingSingular()
        let ending = dictionary.ending()
        let things = dictionary.thingPlural()
        let person = dictionary.realPerson()
        let state = dictionary.state()
        let verbPerson = dictionary.verbPersonFirst()
        let ing = dictionary.verbIng()
        let generalPerson = dictionary.personSingular()
        let verbGeneral = dictionary.verbGeneral()
        let z = zp(6) + 5
        if (z === 0) {
            let tweet = "i smell one " + thing + " " + ending
            return tweet
        }
        if (z === 1) {
            let tweet = "i smell several " + things + " " + ending
            return tweet
        }
        if (z === 2) {
            let tweet = "i miss " + person + " " + ending
            return tweet
        }
        if (z === 3) {
            let tweet = "i lost my " + thing + " to " + person + " " + ending
            return tweet
        }
        if (z === 4) {
            let tweet = "i'm " + state + " and i want " + things + "!! " + ending
            return tweet
        }
        if (z === 5) {
            let tweet = "i want " + person + " to " + verbPerson + " me " + ending
            return tweet
        }
        if (z === 6) {
            let tweet = "imagine wanting " + person + " to have " + things + " " + ending
            return tweet
        }
        if (z === 7) {
            let tweet = "should i start " + ing + " with " + person + "?"
            return tweet
        }
        if (z === 8) {
            let tweet = "you should stop " + ing + " before " + person + " finds out " + ending
            return tweet
        }
        if (z === 9) {
            let tweet = "if you see my " + generalPerson + " " + ing + ", you should uhhh ... " + verbGeneral + " " + ending
            return tweet
        }
        if (z === 10) {
            let tweet = "i need to " + verbGeneral + " with a " + thing + " more often"
            return tweet
        }
    }
}

function zp(z) {
    return Math.floor(Math.random() * z)
}

module.exports = {
    tweet
}
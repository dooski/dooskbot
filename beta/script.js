var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writeTweet() {
  var tweet = generateTweet();
  var tweetText = document.querySelector("#password");

  tweetText.value = tweet;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writeTweet);

function generateTweet(tweet) {
  // begin actual code
  // remove var twitter stuff and replace with return tweet
  // DICTIONARY

  var nouns = ["mystery", "sushi dinner", "friend", "manatee", "maple", "sky", "blood", "tote", "egg", "potion", "chai latte", "chunk", "hot sauce", "plastic bag", "captain falcon's nair", "single-use cutlery", "magnet", "telephone", "girl scout cookie", "dime", "fake out", "fuckin' fake out", "chicken nugget", "bargain", "tadpole", "fuck up", "work of art", "napkin", "motif", "milkshake", "belly", "champagne", "whale", "shark", "whale shark", "healthy soil", "dirt", "queen", "rope", "hawk", "ear", "origami", "frog", "mood ring", "scooter", "nametag", "succulent", "Flamin' Hot Cheetos", "paystub", "funfetti cake", "lil soy bean", "pink eye", "grande vanilla latte", "joy con", "subway", "spongebob screenshot", "beautiful hair", "groovy lunch hour", "noosa", "berry", "mouthful of spiders", "old haunted guitar covered in blood that jesus found by the dumpster, ALLEGEDLY"]
  var properNouns = ["meryl streep", "greta gerwig", "brie larson", "keri russell", "HBO", "dumb dead idiot john mccain", "momo", "celeste", "pashmina", "yoshi", "kk slider", "santa claus herself", "doctor kran", "ridley", "ronan farrow", "pedro martinez", "pawniard", "hawlucha", "dunsparce", "chili", "chai", "canuck", "uncle sam", "garnet", "the perf @girlfoyle", "daymor", "avy", "big sean", "bo horvat", "tina fey", "will", "izzy", "bart the chameleon", "jack eichel", "bernie", "elizabeth warren", "the original rascal", "human girl @andrea_oaks", "greninja", "donkey kong", "diddy kong", "kirby", "mr funk", "my ex", "whale prom", "pokemon", "human @asst_to_hutch", "human @dnmckn", "my roommate", "fart", "inkling", "Doctor Who", "class traitor", "CAPTAIN MAGMA", "isabelle", "andrea's favorite plant", "bulbasaur", "hutch", "zoey the dog", "andrea", "dooski", "king nightmare spiderlord", "hillary", "mudkip"]
  var verbsIng = ["throwing out my important tax files", "sprinting from a bad dream", "rolling down a hill", "falling right out of the sky", "dropping the load", "putting all my amiibo in the washing machine", "fucking up", "invading iraq", "literally just vibing", "fumbling for words", "spinning around and around", "scheming on the low", "hosting", "birding", "grasping at straws", "punishing strangers for their transgressions", "calling tom hanks to ask an important question", "figuring out a way to ask me out :)", "giving the waitress tips", "swinging their hips", "doing a moby dick speedrun", "becoming the real cool cat lately", "breaking up with me", "trying to prove a point", "really going to die on this hill, huh", "eating a burrito shaped like me (by design)"]
  var verbsS = ["pees", "poops", "farts", "dabs", "sneezes", "yeets", "vibes", "wheels and deals", "shits", "stumbles", "tweets", "burns", "stabs", "celebrates", "kisses", "dances", "yearns", "hugs", "embraces"]
  var verbsEd = ["kissed", "dabbed", "exploded", "fell in love", "vibed", "ate loudly", "kissed", "traded", "battled", "transformed!", "performed", "screamed", "drank", "wiggled", "squiggled", "came undone", "fused", "fuckin' GAMED"]
  var adverbs = ["violently", "lovingly", "delightfully", "loudly", "bulbasaurly", "menacingly", "polietly", "drunkenly", "randomly", "literally", "shittily", "globally", "goofily", "longingly", "desperately"]
  var adjectives = ["mean", "super", "cool", "good", "dope as hell", "fresh to death", "fresh", "inky", "stinky", "wet", "spicy"]
  var places = ["in Kirby's Dreamland", "under a dumpster", "on Amtrak", "on SEPTA", "on the LIRR", "at work", "near one of those classic active shootouts", "at the chili's", "in the applebee's bathroom", "on foreign land", "in the Long Island Sound", "in heaven", "in the Deep Sea Metro", "in the belly of a whale, like jonah", "in woody from toy story's boot", "on Red Couch", "during a Philadelphia sports riot", "inside a secret", "at the peach mag reading", "at the Clam Bake", "at the airport", "at baggage claim", "where we met", "where we joined body and soul together", "in Hawaii!", "in peach mag headquarters"]

  // picks tweet type
  // TYPES are:
  // 0: dont text (10%)
  // 1: *does something* (10%)
  // 2: as a treat (10%)
  // 3: its about (10%)
  // 4: trans rights (10%)
  // 5: the power of (10%)
  // 6: shipping (10%)
  // 7: All blank knows is (10%) 
  // 8: in my town? (10%)
  // 9: haha just kidding unless (10%)

  var t = Math.floor(Math.random() * 10);
  console.log(t)
  console.log(" ")
  console.log("nouns length= " + nouns.length)
  console.log("properNouns length= " + properNouns.length)
  console.log("verbsIng length= " + verbsIng.length)
  console.log("verbsS length= " + verbsS.length)
  console.log("verbsEd length= " + verbsEd.length)
  console.log("adverbs length= " + adverbs.length)
  console.log("places length= " + places.length)
  console.log(" ")
  // tweets

  // DONT TEXT function: 10% chance
  if (t === 0) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    let tweet = properNoun + " is " + verbIng + ", dont text";

    console.log(tweet);
    return tweet;
  }

  // DOES SOMETHING function: 10% chance
  if (t === 1) {
    var x = Math.floor(Math.random() * adverbs.length);
    var adverb = adverbs[x];
    var y = Math.floor(Math.random() * verbsS.length);
    var verboS = verbsS[y];
    var z = Math.floor(Math.random() * places.length);
    var place = places[z];
    let tweet = "*" + adverb + " " + verboS + " " + place + "*";

    console.log(tweet);
    return tweet;
  }

  // AS A TREAT function: 10% chance
  if (t === 2) {
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[z];
    let tweet = properNoun + " can have little a " + noun + ", as a treat";

    console.log(tweet);
    return tweet;
  }

  // ITS ABOUT function: 10% chance
  if (t === 3) {
    var about = Math.floor(Math.random() * 2);
    //noun
    if (about === 0) {
      var y = Math.floor(Math.random() * nouns.length);
      var noun = nouns[y];
      let tweet = "its about the " + noun + ", send tweet";

      console.log(tweet);
      return tweet;
    }
    //properNoun
    if (about === 1) {
      var y = Math.floor(Math.random() * properNouns.length);
      var properNoun = properNouns[y];
      let tweet = "its about " + properNoun + ", send tweet";

      console.log(tweet);
      return tweet;
    }
    //verbsIng
    if (about === 2) {
      var y = Math.floor(Math.random() * verbsIng.length);
      var verbIng = verbsIng[y];
      let tweet = "its about " + verbIng + ", send tweet";

      console.log(tweet);
      return tweet;
    }
  }

  // TRANS RIGHTS function: 10% chance
  if (t === 4) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    let tweet = properNoun + " said trans rights";

    console.log(tweet);
    return tweet;
  }

  // AND I OOP function: 10% chance
  if (t === 5) {
    var x = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[x];
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    let tweet = "the power of " + adjective + " " + noun + "s shines within you";
    console.log(tweet);
    return tweet;
  }

  // SHIPPING function: 10% chance
  if (t === 6) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun1 = properNouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun2 = properNouns[z];
    let tweet = "i ship " + properNoun1 + " and " + properNoun2 + ".";

    console.log(tweet);
    return tweet;
  }

  // ALL NOUN KNOWS IS function: 0% chance
  if (t === 7) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    let tweet = "all " + properNoun + " knows is " + noun + " and " + verbIng + ".";

    console.log(tweet);
    return tweet;
  }

  // MORE LIKELY function: 10% chance
  if (t === 8) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[y];
    let tweet = noun + "? in my " + adjective + " town? it's more likely than you think";

    console.log(tweet);
    return tweet;
  }

  // WHAT IF WE function: 10% chance
  if (t === 9) {
    var x = Math.floor(Math.random() * verbsEd.length);
    var verbEd = verbsEd[x];
    var y = Math.floor(Math.random() * places.length);
    var place = places[y];
    let tweet = "what if we " + verbEd + " " + place + "? haha just kidding............ unless?";

    console.log(tweet);
    return tweet;
  }
}
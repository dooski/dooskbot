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




  // DICTIONARY: nouns are singular common nouns; properNouns are singular proper nouns; verbsIng are gerund phrases
  // verbsEd are past tense verbs; adverbs are adverbs ending in -ly; places are prepositional phrases mostly giving location
  var nouns = ["mystery", "sushi dinner", "friend", "manatee", "maple", "sky", "blood", "tote", "egg", "potion", "chai latte", "chunk", "hot sauce", "medium double double", "plastic bag", "captain falcon's nair", "single-use cutlery", "slapper", "magnet", "telephone", "girl scout cookie", "dime", "fake out", "fuckin' fake out", "chicken nugget", "bargain", "tadpole", "fuck up", "work of art", "napkin", "motif", "milkshake", "belly", "champagne", "whale", "shark", "whale shark", "healthy soil", "dirt", "queen", "rope", "hawk", "ear", "origami", "frog", "mood ring", "scooter", "nametag", "succulent", "Flamin' Hot Cheetos", "paystub", "funfetti cake", "lil soy bean", "pink eye", "grande vanilla latte", "joy con", "subway", "spongebob screenshot", "beautiful hair", "groovy lunch hour", "noosa", "berry", "mouthful of spiders", "old haunted guitar covered in blood that jesus found by the dumpster, ALLEGEDLY"]
  var properNouns = ["me", "shiny wooloo", "barack obama", "magic johnson", "queen nightmare spiderlord", "meryl streep", "Splatoon 2 for the Nintendo Switch", "chelsea", "calamity ganon", "kate winslet", "greta gerwig", "brie larson", "keri russell", "HBO", "dumb dead idiot john mccain", "momo", "celeste", "helen", "pashmina", "yoshi", "kk slider", "santa claus herself", "doctor kran", "ridley", "ronan farrow", "pedro martinez", "pawniard", "hawlucha", "dunsparce", "chili", "chai", "canuck", "uncle sam", "garnet", "the perf @girlfoyle", "daymor", "avy", "big sean", "bo horvat", "tina fey", "will", "izzy", "bart the chameleon", "jack eichel", "bernie", "elizabeth warren", "the original rascal", "human girl @andrea_oaks", "greninja", "donkey kong", "diddy kong", "kirby", "mr funk", "my ex", "whale prom", "pokemon", "human @asst_to_hutch", "human @dnmckn", "my roommate", "fart", "inkling", "Doctor Who", "class traitor", "CAPTAIN MAGMA", "isabelle", "andrea's favorite plant", "bulbasaur", "hutch", "zoey the dog", "andrea", "dooski", "king nightmare spiderlord", "hillary", "mudkip"]
  var verbsIng = ["rigging a primary", "throwing out my important tax files", "turning back", "squeezing the last bit of toothpaste out", "ordering pizza", "ordering systemic change in our social order", "spreading COVID-19 on purpose", "straight flexing", "exploring the entire world", "sprinting from a bad dream", "rolling down a hill", "falling right out of the sky", "dropping the load", "putting all my amiibo in the washing machine", "fucking up", "invading iraq", "literally just vibing", "fumbling for words", "spinning around and around", "scheming on the low", "hosting", "birding", "grasping at straws", "punishing strangers for their transgressions", "calling tom hanks to ask an important question", "figuring out a way to ask me out :)", "giving the waitress tips", "swinging their hips", "doing a moby dick speedrun", "becoming the real cool cat lately", "breaking up with me", "trying to prove a point", "really going to die on this hill, huh", "eating a burrito shaped like me (by design)"]
  var verbsS = ["darkens", "pees", "poops", "farts", "dabs", "sneezes", "yeets", "laughs", "vibes", "flexes", "wheels and deals", "shits", "stumbles", "tweets", "burns", "stabs", "celebrates", "smacks", "bangs", "slaps", "kisses", "dances", "yearns", "hugs", "embraces"]
  var verbsEd = ["kissed", "lost", "dabbed", "exploded", "fell in love", "vibed", "chuckled", "ate loudly", "flexed", "kissed", "traded", "battled", "transformed!", "performed", "screamed", "drank", "wiggled", "snuggled", "came undone", "fused", "fuckin' GAMED"]
  var adverbs = ["violently", "gorgeously", "lovingly", "delightfully", "hastily", "loudly", "barely", "nautically", "bulbasaurly", "menacingly", "rudely", "polietly", "drunkenly", "randomly", "literally", "shittily", "globally", "goofily", "longingly", "desperately"]
  var adjectives = ["mean", "super", "cool", "good", "dope as hell", "nautical", "fresh to death", "fresh", "inky", "stinky", "wet", "spicy", "blue", "jazzy"]
  var places = ["in Kirby's Dreamland", "in line at Federal Donuts", "under a dumpster", "on Amtrak", "on SEPTA", "on the LIRR", "at work", "at Mighty Taco", "at the Phoebe Bridger's concert", "by the docks", "near one of those classic active shootouts", "at the chili's", "in the applebee's bathroom", "on foreign land", "in the Long Island Sound", "in heaven", "in the Deep Sea Metro", "in the belly of a whale, like jonah", "in woody from toy story's boot", "on Red Couch", "during a Philadelphia sports riot", "inside a secret", "at the peach mag reading", "at the Clam Bake", "at the airport", "at baggage claim", "where we met", "where we joined body and soul together", "in Hawaii!", "in peach mag headquarters"]
  var events = ["cause the COVID-19 pandemic", "9/11", "the sinking of the lusitania", "Y2K", "the miracle on ice", "the chicago fire", "the space landing", "the destruction of hyrule", "the JFK assassination", "pull off the best birthday surprise party ever!", "this", "all of vietnam", "start the titular fire in Billy Joel's classic We Didn't Start the Fire",]

  // picks tweet type
  // TYPES are:
  // 0: dont text
  // 1: *does something*
  // 2: as a treat
  // 3: its about
  // 4: trans rights
  // 5: the power of
  // 6: shipping
  // 7: All blank knows is 
  // 8: in my town?
  // 9: haha just kidding unless
  // 10: maybe the real
  // 11: determination
  // 12: not to be
  // 13: blank did blank

  var t = Math.floor(Math.random() * 14);
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
  var shiny = Math.floor(Math.random() * 70)
  if (shiny === 69) {
    console.log("shiny!")
  }
  //shiny tweet
  if (shiny === 69 && t === 4) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    let tweet = "*a shiny " + properNoun + " appears!";
    return tweet;
  }
  // tweets
  // DONT TEXT function: 10% chance
  if (t === 0) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    let tweet = properNoun + " is " + verbIng + ", dont text";
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
    return tweet;
  }

  // AS A TREAT function: 10% chance
  if (t === 2) {
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[z];
    let tweet = properNoun + " can have little a " + noun + ", as a treat";
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
      var Twit = require('twit');

      var T = new Twit({
        consumer_key: 'MxxAz1Qiy2syu9DnepL7Cm5rm',
        consumer_secret: 'n6Wrjkzm3SU5xTM53QenVuQuvDHRPkHD3Ms8zlm8S3MqNS4Vm3',
        access_token: '1232125524035723270-qW48ORdFQCSCJ1FNlfcDT0rzZ1y6Gm',
        access_token_secret: 'I1dT9knpbsGmckVqsrpikKMM7XIAypxmtpop5MAe1nZ2L'
      })

      T.post('statuses/update', {
        status: tweet
      })

      console.log(tweet)
    }

    //properNoun
    if (about === 1) {
      var y = Math.floor(Math.random() * properNouns.length);
      var properNoun = properNouns[y];
      let tweet = "its about " + properNoun + ", send tweet";
      var Twit = require('twit');

      var T = new Twit({
        consumer_key: 'MxxAz1Qiy2syu9DnepL7Cm5rm',
        consumer_secret: 'n6Wrjkzm3SU5xTM53QenVuQuvDHRPkHD3Ms8zlm8S3MqNS4Vm3',
        access_token: '1232125524035723270-qW48ORdFQCSCJ1FNlfcDT0rzZ1y6Gm',
        access_token_secret: 'I1dT9knpbsGmckVqsrpikKMM7XIAypxmtpop5MAe1nZ2L'
      })

      T.post('statuses/update', {
        status: tweet
      })

      console.log(tweet)
    }
    //verbsIng
    if (about === 2) {
      var y = Math.floor(Math.random() * verbsIng.length);
      var verbIng = verbsIng[y];
      let tweet = "its about " + verbIng + ", send tweet";
      var Twit = require('twit');

      var T = new Twit({
        consumer_key: 'MxxAz1Qiy2syu9DnepL7Cm5rm',
        consumer_secret: 'n6Wrjkzm3SU5xTM53QenVuQuvDHRPkHD3Ms8zlm8S3MqNS4Vm3',
        access_token: '1232125524035723270-qW48ORdFQCSCJ1FNlfcDT0rzZ1y6Gm',
        access_token_secret: 'I1dT9knpbsGmckVqsrpikKMM7XIAypxmtpop5MAe1nZ2L'
      })

      T.post('statuses/update', {
        status: tweet
      })

      console.log(tweet)
    }
  }

  // TRANS RIGHTS function: 10% chance
  if (t === 4 && shiny !== 69) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    let tweet = properNoun + " said trans rights";
    return tweet;
  }

  // THE POWER OF function: 10% chance
  if (t === 5) {
    var x = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[x];
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    let tweet = "the power of " + adjective + " " + noun + "s shines within you";
    return tweet;
  }

  // SHIPPING function: 10% chance
  if (t === 6) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun1 = properNouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun2 = properNouns[z];
    let tweet = "i ship " + properNoun1 + " and " + properNoun2 + ", no questions";
    return tweet;
  }

  // ALL NOUN KNOWS IS function: 10% chance
  if (t === 7) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    let tweet = "all " + properNoun + " knows is " + noun + " and " + verbIng + ".";
    return tweet;
  }

  // IN MY TOWN function: 10% chance
  if (t === 8) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[y];
    let tweet = noun + "? in my " + adjective + " town????";
    return tweet;
  }

  // WHAT IF WE function: 10% chance
  if (t === 9) {
    var x = Math.floor(Math.random() * verbsEd.length);
    var verbEd = verbsEd[x];
    var y = Math.floor(Math.random() * places.length);
    var place = places[y];
    let tweet = "what if we " + verbEd + " " + place + "? haha just kidding............ unless?";
    return tweet;
  }

  //MAYBE THE REAL
  if (t === 10) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * nouns.length);
    var noun2 = nouns[y];
    let tweet = "maybe the real " + noun + " was the " + noun2 + " we made along the way"
    return tweet;
  }

  //FILLS YOU WITH DETERMINATION
  if (t === 11) {
    var x = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[x];
    var y = Math.floor(Math.random() * adverbs.length);
    var adverb = adverbs[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verb = verbsIng[z];
    let tweet = "the sight of " + properNoun + " " + adverb + " " + verb + "; it fills me with determination"
    return tweet;
  }

  // HOT TAKE
  if (t === 12) {
    var x = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[x];
    var y = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[y];
    var z = Math.floor(Math.random() * nouns.length);
    var noun = nouns[z];
    let tweet = "not to get all " + adjective + " on main, but " + properNoun + " is not your " + noun + " /:"
    return tweet;
  }

  // BLANK DID BLANK
  if (t === 13) {
    var x = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[x];
    var y = Math.floor(Math.random() * events.length);
    var event = events[y];
    let tweet = properNoun + " did " + event + "."
    return tweet;
  }
}
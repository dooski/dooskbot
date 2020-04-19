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
  var nouns = ["mystery", "love", "graham cracker", "sushi dinner", "friend", "pudding on a ritz (like the cracker lmao)", "manatee", "maple", "sky", "blood", "tote", "egg", "potion", "chai latte", "chunk", "hot sauce", "medium double double", "boot", "plastic bag", "wealth equality", "captain falcon's nair", "single-use cutlery", "slapper", "magnet", "telephone", "girl scout cookie", "dime", "fake out", "fuckin' fake out", "chicken nugget", "bargain", "tadpole", "fuck up", "work of art", "napkin", "motif", "milkshake", "belly", "champagne", "whale", "shark", "whale shark", "healthy soil", "dirt", "queen", "rope", "hawk", "ear", "origami", "frog", "mood ring", "scooter", "nametag", "succulent", "Flamin' Hot Cheetos", "paystub", "funfetti cake", "lil soy bean", "pink eye", "grande vanilla latte", "joy con", "subway", "spongebob screenshot", "beautiful hair", "groovy lunch hour", "noosa", "berry", "mouthful of spiders", "old haunted guitar covered in blood that jesus found by the dumpster, ALLEGEDLY"]
  var properNouns = ["me", "justin true doe", "mighty sapling warrior", "shiny wooloo", "tom nook", "warlord acorn", "all the good folks at @FinjiCo", "barack obama", "magic johnson", "dominic the donkey", "italian christmas donkey", "Fargo, on FX returning April 20,", "meryl streep", "Splatoon 2 for the Nintendo Switch", "animal crossing", "chelsea", "calamity ganon", "kate winslet", "greta gerwig", "brie larson", "keri russell", "HBO", "dumb dead idiot john mccain", "momo", "celeste", "helen", "pashmina", "Andre 3000", "yoshi", "kk slider", "santa claus herself", "doctor kran", "ridley", "the alien from alien", "non canonical jar jar binks", "ronan farrow", "pedro martinez", "pawniard", "hawlucha", "dunsparce", "chili", "chai", "canuck", "uncle sam", "garnet", "the perf @girlfoyle", "daymor", "avy", "big sean", "bo horvat", "tina fey", "will", "izzy", "bart the chameleon", "jack eichel", "bernie", "elizabeth warren", "the original rascal", "human girl @andrea_oaks", "greninja", "donkey kong", "diddy kong", "kirby", "mr funk", "my ex", "whale prom", "pokemon", "human @asst_to_hutch", "human @dnmckn", "my roommate", "fart", "inkling", "Doctor Who", "class traitor", "CAPTAIN MAGMA", "isabelle", "andrea's favorite plant", "bulbasaur", "hutch", "zoey the dog", "andrea", "dooski", "king nightmare spiderlord", "hillary", "mudkip"]
  var verbsIng = ["rigging a primary", "putting on the ritz", "sealing jeff bezos away for eternity", "doing a little dance on the catwalk", "throwing out my important tax files", "turning back", "squeezing the last bit of toothpaste out", "ordering pizza", "ordering systemic change in our social order", "spreading COVID-19 on purpose", "straight flexing", "exploring the entire world", "sprinting from a bad dream", "rolling down a hill", "falling right out of the sky", "dropping the load", "putting all my amiibo in the washing machine", "fucking up", "invading iraq", "literally just vibing", "fumbling for words", "spinning around and around", "scheming on the low", "jumping", "showering in pig's blood like that one scene in episode three season one of the FX series, Fargo, returns April 20 #sponsored", "birding", "grasping at straws", "punishing strangers for their transgressions", "calling tom hanks to ask an important question", "figuring out a way to ask me out :)", "giving the waitress tips", "swinging their hips", "doing a moby dick speedrun", "becoming the real cool cat lately", "breaking up with me", "trying to prove a point", "really going to die on this hill, huh", "eating a burrito shaped like me (by design)"]
  var verbsS = ["darkens", "pees", "backflips", "poops", "farts", "dabs", "sneezes", "yeets", "laughs", "vibes", "flexes", "wheels and deals", "shits", "stumbles", "tweets", "burns", "stabs", "celebrates", "smacks", "bangs", "slaps", "kisses", "dances", "yearns", "hugs", "embraces"]
  var verbsEd = ["kissed", "smoked", "lost", "dabbed", "drove", "fell in love", "splatted", "vibed", "chuckled", "ate loudly", "flexed", "kissed", "traded", "battled", "transformed!", "performed", "screamed", "drank", "wiggled", "snuggled", "came undone", "fused", "fuckin' GAMED"]
  var adverbs = ["violently", "gorgeously", "lovingly", "delightfully", "hastily", "loudly", "barely", "nautically", "bulbasaurly", "menacingly", "rudely", "polietly", "drunkenly", "randomly", "literally", "shittily", "gently", "goofily", "longingly", "desperately"]
  var adjectives = ["mean", "super", "cool", "asinine", "good", "dope as hell", "nautical", "nude", "fresh to death", "fresh", "inky", "stinky", "wet", "spicy", "blue", "jazzy", "stanky", ""]
  var places = ["in Kirby's Dreamland", "in the middle of charging up a booyah bomb", "in the Vatican", "in quebec", "inside the milk fridge at wegmans", "in the lancelot parking lot of dulac", "in the dooskbot server, bayBEE", "in line at Federal Donuts", "under a dumpster", "on Amtrak", "on SEPTA", "on the LIRR", "at work", "at Mighty Taco", "at the Phoebe Bridger's concert", "by the docks", "near one of those classic active shootouts", "at the chili's", "in the applebee's bathroom", "on foreign land", "in the Long Island Sound", "in heaven", "in the Deep Sea Metro", "in the belly of a whale, like jonah", "in woody from toy story's boot", "on Red Couch", "during a Philadelphia sports riot", "inside a secret", "at the peach mag reading", "at the Clam Bake", "at the airport", "at baggage claim", "where we met", "where we joined body and soul together", "in Hawaii!", "in peach mag headquarters"]
  var events = ["cause the COVID-19 pandemic", "the worm", "the ice bucket challenge", "9/11", "the sinking of the lusitania", "Y2K", "the miracle on ice", "the chicago fire", "sports!", "the space landing", "the destruction of hyrule", "the JFK assassination", "pull off the best birthday surprise party ever!", "this", "all of vietnam", "start the titular fire in Billy Joel's classic We Didn't Start the Fire",]

  // picks tweet type
  // TYPES are:
  // 0: dont text
  // 1: *does something*
  // 2: as a treat
  // 3: its about
  // 4: said
  // 5: the power of
  // 6: shipping
  // 7: All blank knows is 
  // 8: in my town?
  // 9: haha just kidding unless
  // 10: maybe the real
  // 11: determination
  // 12: not to be
  // 13: blank did blank
  // 14: putting me on blast

  var endings = [":)", "/:", "lol", " :')", "this says a lot about our society", " :/", " lmao", " ok", "ha haa", "carpe diem!", "waka waka!", "go bills", "o no", ":3", "c:", "and uh, coconut crab", ":/", "please call me", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

  //random tweet picker


  var t = Math.floor(Math.random() * 15);

  console.log(t)
  console.log(" ")
  console.log("nouns length is " + nouns.length)
  console.log("properNouns length is " + properNouns.length)
  console.log("verbsIng length is " + verbsIng.length)
  console.log("verbsS length is " + verbsS.length)
  console.log("verbsEd length is " + verbsEd.length)
  console.log("adverbs length is " + adverbs.length)
  console.log("places length is " + places.length)
  console.log("events length is " + events.length)
  console.log(" ")

  //shiny check
  var shiny = Math.floor(Math.random() * 70)
  if (shiny === 69) {
    console.log("shiny!")
  }
  //shiny tweet
  if (shiny === 69 && t === 4) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    let tweet = "* a shiny " + properNoun + " appears! *";
    return tweet;
  }


  // tweets
  // DONT TEXT
  if (t === 0) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    var x = Math.floor(Math.random() * endings.length);
    var ending = endings[x];
    let tweet = properNoun + " is " + verbIng + ", dont text " + ending;
    return tweet;
  }

  // DOES SOMETHING
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

  // AS A TREAT
  if (t === 2) {
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[z];
    let tweet = properNoun + " can have little a " + noun + ", as a treat";
    return tweet;
  }

  // ITS ABOUT
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

  // SAID TRANS RIGHTS
  if (t === 4 && shiny !== 69) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var rights = ["trans rights", "trans visibility", "its my turn!", "gay rights", "bi visibility", "queer visibility", "dont worry :)"];
    var x = Math.floor(Math.random() * rights.length);
    var right = rights[x]
    let tweet = properNoun + " said " + right;
    return tweet;
  }

  // THE POWER OF
  if (t === 5) {
    var x = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[x];
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    let tweet = "the power of " + adjective + " " + noun + "s shines within you";
    return tweet;
  }

  // SHIPPING
  if (t === 6) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun1 = properNouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun2 = properNouns[z];
    var z1 = Math.floor(Math.random() * endings.length);
    var ending = endings[z1]
    let tweet = "i ship " + properNoun1 + " and " + properNoun2 + ", no questions " + ending;
    return tweet;
  }

  // ALL NOUN KNOWS IS
  if (t === 7) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    var z1 = Math.floor(Math.random() * endings.length);
    var ending = endings[z1]
    let tweet = "all " + properNoun + " knows is " + noun + " and " + verbIng + " " + ending;
    return tweet;
  }

  // IN MY TOWN
  if (t === 8) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[y];
    let tweet = noun + "? in my " + adjective + " town????";
    return tweet;
  }

  // WHAT IF WE
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
    var z1 = Math.floor(Math.random() * endings.length);
    var ending = endings[z1]
    let tweet = "maybe the real " + noun + " was the " + noun2 + " we made along the way " + ending;
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
    var z1 = Math.floor(Math.random() * endings.length);
    var ending = endings[z1]
    let tweet = "not to get all " + adjective + " on main, but " + properNoun + " is not your " + noun + " " + ending;
    return tweet;
  }

  // BLANK DID BLANK
  if (t === 13) {
    var x = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[x];
    var y = Math.floor(Math.random() * events.length);
    var event = events[y];
    var z = Math.floor(Math.random() * endings.length);
    var ending = endings[z];
    let tweet = properNoun + " did " + event + ending;
    return tweet;
  }

  // PUTTING ME ON BLAST
  if (t === 14) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    var x = Math.floor(Math.random() * endings.length);
    var ending = endings[x];
    let tweet = "why is " + properNoun + " putting me on blast for " + verbIng + " ???? " + ending;
    return tweet;
  }
}


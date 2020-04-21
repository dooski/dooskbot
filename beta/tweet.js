
// DICTIONARY: nouns are singular common nouns; properNouns are singular proper nouns; verbsIng are gerund phrases
// verbsEd are past tense verbs; adverbs are adverbs ending in -ly; places are prepositional phrases mostly giving location
var nouns = ["mystery", "love", "jock", "doober", "cadbury egg", "shoobie", "starburst jellybean", "oarfish", "oral hygeine", "dictionary", "goober", "scuba diving", "graham cracker", "gardening", "airplane", "pepperoni", "blue bird", "airhead", "dog", "rancho", "sushi dinner", "hockey", "football", "bare-knuckle boxing", "parade", "friend", "butt", "pudding on a ritz (like the cracker lmao)", "manatee", "maple", "sky", "blood", "tote", "egg", "potion", "chai latte", "chunk", "hot sauce", "medium double double", "boot", "plastic bag", "wealth equality", "captain falcon's nair", "single-use cutlery", "slapper", "magnet", "telephone", "girl scout cookie", "dime", "fake out", "fuckin' fake out", "chicken nugget", "bargain", "tadpole", "fuck up", "work of art", "napkin", "motif", "milkshake", "belly", "champagne", "whale", "shark", "whale shark", "healthy soil", "dirt", "soft pretzel", "queen", "rope", "hawk", "ear", "origami", "frog", "mood ring", "scooter", "nametag", "succulent", "Flamin' Hot Cheetos", "paystub", "PEANUTS", "funfetti cake", "lil soy bean", "pink eye", "grande vanilla latte", "joy con", "subway", "spongebob screenshot", "beautiful hair", "groovy lunch hour", "noosa", "berry", "mouthful of spiders", "old haunted guitar covered in blood that jesus found by the dumpster, ALLEGEDLY"]
var properNouns = ["me", "steve martin's banjo", "talking dog at the shell shack", "nbc peacock", "muppets christmas special", "Babe", "pelican man", "lunch lady who loves you :)", "franklin the turtle", "larry boy", "npr", "terry gross", "madonna", "Jeb!", "josh groban's angelic voice", "fart vader", "mr. buckley", "glenn close", "gillian anderson", "scully", "mulder", "guy fieri's bottle of bleach", "helen obama carter", "chef bobby flay", "king george", "meryl streep's vocal coach", "bob odenkirk", "BIBLICAL JONAH", "spanky", "fred armisen", "mail robot? like from the 80s?? that would deliver mail????", "lionel richie", "patton oswalt", "chubby jonah hill", "skinny jonah hill", "sarah crowley incarnate", "punk rock chicken", "this dooskbot", "timmy and tommy", "ghost of the great barrier reef", "squidward tentpoles", "swagner", "chip", "cramorant", "goldie", "kapp'n", "santiago", "julian casablancas", "sydnee mcelroy", "yellow yoshi (bisexual)", "gritty", "captain bones", "crazy bones", "my closest friend @goodtimebot", "my nemesis @rchllxbot", "guthix", "jason funderburker", "rachelle", "meg", "hillary", "matt", "justin true doe", "kyle maclachlan", "candy isle", "mighty sapling warrior", "shiny wooloo", "tom nook", "warlord acorn", "all the good folks at @FinjiCo", "barack obama", "magic johnson", "dominic the donkey", "italian christmas donkey", "Fargo, on FX returning April 20,", "meryl streep", "Splatoon 2 for the Nintendo Switch", "animal crossing", "chelsea", "calamity ganon", "kate winslet", "greta gerwig", "brie larson", "keri russell", "HBO", "dumb dead idiot john mccain", "momo", "celeste", "helen", "pashmina", "Andre 3000", "yoshi", "kk slider", "santa claus herself", "doctor kran", "ridley", "the alien from alien", "non canonical jar jar binks", "ronan farrow", "pedro martinez", "pawniard", "hawlucha", "dunsparce", "chili", "chai", "canuck", "uncle sam", "garnet", "the perf @girlfoyle", "daymor", "avy", "big sean", "bo horvat", "tina fey", "will", "izzy", "bart the chameleon", "jack eichel", "bernie", "elizabeth warren", "the original rascal", "human girl @andrea_oaks", "greninja", "donkey kong", "diddy kong", "kirby", "mr funk", "my ex", "whale prom", "pokemon", "human @asst_to_hutch", "human @dnmckn", "my roommate", "fart", "inkling", "Doctor Who", "class traitor", "CAPTAIN MAGMA", "isabelle", "andrea's favorite plant", "bulbasaur", "hutch", "zoey the dog", "andrea", "dooski", "king nightmare spiderlord", "hillary", "mudkip"]
var verbsIng = ["rigging a primary", "watching Dad trying not to cry during a World War II documentary", "watching a World War II documentary with dad", "killing them with kindness", "hacking JSTOR", "dating the librarian", "crossing the picket line", "stepping in shit at the dog park", "not brushing their teeth", "watching a fan-made youtube compilation of peridot yelling", "going back in time and killing andrew jackson", "going back in time and killing andrew jackson wearing a salmon suit", "being a normie", "giving up the gun", "getting eliminated in the appetizer round of chopped ):", "showing my best friend squidward to everyone in town", "losing the egg hunt", "winning the egg hunt", "cheating during the egg hunt", "'wow' reacting only", "cracking open a cold one with the boys", "letting everyone know that the boys are back in town", "snacking on a bowl of croutons", "camping in the backyard", "camping in the backyard while wearing a salmon suit", "bicycle kicking the christmas ham", "playin' in the sprinkler", "showing my best friend squidward to everyone in town wearing a salmon suit", "having a bowl of nails for breakfast without any milk", "screaming into a body pillow", "burning the pizza", "chugging a half gallon of heavy cream", "spilling milk everywhere", "looking fresh", "snatching a relic", "listening to the hit rochester band @candy_isle on spotify", "promoting sustainable forestry", "hosting an outdoor barbecue with the boys from the office", "constructing a guillotine", "savoring the delicious taste of airheads", "putting on the ritz", "asking out my crush", "stealing flowers", "getting hot during the quarantine despite what @asst_to_hutch said", "crying like a tall child", "feeling fuzzy from all the facebook comments from mom's friends", "sealing jeff bezos away for eternity", "doing a little dance on the catwalk", "throwing out my important tax files", "turning back", "squeezing the last bit of toothpaste out", "ordering pizza", "ordering systemic change in our social order", "spreading COVID-19 on purpose", "straight flexing", "exploring the entire world", "sprinting from a bad dream", "rolling down a hill", "falling right out of the sky", "dropping the load", "putting all my amiibo in the washing machine", "fucking up", "invading iraq", "literally just vibing", "fumbling for words", "spinning around and around", "scheming on the low", "jumping", "showering in pig's blood like that one scene in episode three season one of the FX series, Fargo, returns April 20 #sponsored", "birding", "grasping at straws", "punishing strangers for their transgressions", "calling tom hanks to ask an important question", "figuring out a way to ask me out :)", "dancing like everyone's watching", "cheating on their math test", "doing a moby dick speedrun", "becoming the real cool cat lately", "breaking up with me", "trying to prove a point", "really going to die on this hill, huh", "eating a burrito shaped like me (by design)"]
var verbsS = ["darkens", "pees", "backflips", "dunks", "panic hugs", "poops", "farts", "dabs", "sneezes", "yeets", "laughs", "vibes", "flexes", "wheels and deals", "shits", "stumbles", "tweets", "burns", "stabs", "celebrates", "smacks", "bangs", "slaps", "kisses", "dances", "yearns", "hugs", "embraces"]
var verbsEd = ["kissed", "defeated", "smashed", "discovered", "scrubbed", "smoked", "lost", "dabbed", "ratted", "drove", "divorced", "listened", "fell in love", "splatted", "vibed", "chuckled", "ate loudly", "flexed", "kissed", "traded", "battled", "transformed!", "performed", "screamed", "schucked", "drank", "wiggled", "snuggled", "came undone", "fused", "fuckin' GAMED"]
var adverbs = ["violently", "gorgeously", "extrmeely", "lovingly", "goonishly", "delightfully", "hastily", "loudly", "barely", "nautically", "bulbasaurly", "menacingly", "rudely", "polietly", "drunkenly", "randomly", "literally", "shittily", "gently", "goofily", "longingly", "desperately", "proudly", "excitedly", "shakily"]
var adjectives = ["mean", "salty", "weird", "space", "fictional", "lucky", "friendly", "sick", "super", "cool", "asinine", "good", "dope as hell", "nautical", "nude", "fresh to death", "fresh", "inky", "stinky", "wet", "spicy", "blue", "jazzy", "stanky", "brazed"]
var places = ["in Kirby's Dreamland", "with a box of scraps", "in the typhoon lagoon wave pool", "in line at payless shoesource", "at the pizza hut", "at the taco bell", "at the combination pizza hut-taco bell", "on jamaica avenue", "in the house tonight", "on robot pirate island", "on nightmare tarantula island", "in the middle of charging up a booyah bomb", "in the Vatican", "in quebec", "inside the milk fridge at wegmans", "in the lancelot parking lot of dulac", "in the dooskbot server, bayBEE", "in line at Federal Donuts", "under a dumpster", "on Amtrak", "on SEPTA", "on the LIRR", "at work", "at Mighty Taco", "at the Phoebe Bridger's concert", "by the docks", "near one of those classic active shootouts", "at the chili's", "in the applebee's bathroom", "on foreign land", "in the Long Island Sound", "in heaven", "in the Deep Sea Metro", "in the belly of a whale, like jonah", "in woody from toy story's boot", "on Red Couch", "during a Philadelphia sports riot", "inside a secret", "at the peach mag reading", "at the Clam Bake", "at the airport", "at baggage claim", "where we met", "where we joined body and soul together", "in Hawaii!", "in peach mag headquarters"]
var events = ["cause the COVID-19 pandemic", "the age of imperialism", "the worm", "the founding of sharkland", "the ice bucket challenge", "9/11", "the sinking of the lusitania", "Y2K", "the miracle on ice", "the chicago fire", "sports!", "the space landing", "the destruction of hyrule", "the JFK assassination", "pull off the best birthday surprise party ever!", "this", "all of vietnam", "start the titular fire in Billy Joel's classic We Didn't Start the Fire"]


//featuring pitbull function

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
// 15: same as it ever was

var endings = [":)", "/:", "lol", " :')", "this says a lot about our society", " :/", " lmao", " ok", "ha haa", "carpe diem!", "waka waka!", "go bills", "o no", ":3", "c:", "and uh, coconut crab", ":/", "please call me", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

function dooskbot() {
  //random tweet picker


  var t = Math.floor(Math.random() * 17);

  console.log(t)
  console.log(" ")
  console.log("nouns length is " + nouns.length)
  console.log("properNouns length is " + properNouns.length)
  console.log("verbsIng length is " + verbsIng.length)
  console.log("verbsS length is " + verbsS.length)
  console.log("verbsEd length is " + verbsEd.length)
  console.log("adverbs length is " + adverbs.length)
  console.log("adjectives length is " + adjectives.length)
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

  // DOES SOMETHING
  if (t === 1) {
    var x = Math.floor(Math.random() * adverbs.length);
    var adverb = adverbs[x];
    var y = Math.floor(Math.random() * verbsS.length);
    var verboS = verbsS[y];
    var z = Math.floor(Math.random() * places.length);
    var place = places[z];
    let tweet = "*" + adverb + " " + verboS + " " + place + "*";
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

  // AS A TREAT
  if (t === 2) {
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[z];
    let tweet = properNoun + " can have little a " + noun + ", as a treat";
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

  // THE POWER OF
  if (t === 5) {
    var x = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[x];
    var y = Math.floor(Math.random() * nouns.length);
    var noun = nouns[y];
    let tweet = "the power of " + adjective + " " + noun + "s shines within you";
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

  // SHIPPING
  if (t === 6) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun1 = properNouns[y];
    var z = Math.floor(Math.random() * properNouns.length);
    var properNoun2 = properNouns[z];
    var z1 = Math.floor(Math.random() * endings.length);
    var ending = endings[z1]
    let tweet = "i ship " + properNoun1 + " and " + properNoun2 + ", no questions " + ending;
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

  // IN MY TOWN
  if (t === 8) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * adjectives.length);
    var adjective = adjectives[y];
    let tweet = noun + "? in my " + adjective + " town????";
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

  // WHAT IF WE
  if (t === 9) {
    var x = Math.floor(Math.random() * verbsEd.length);
    var verbEd = verbsEd[x];
    var y = Math.floor(Math.random() * places.length);
    var place = places[y];
    let tweet = "what if we " + verbEd + " " + place + "? haha just kidding............ unless?";
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

  //MAYBE THE REAL
  if (t === 10) {
    var x = Math.floor(Math.random() * nouns.length);
    var noun = nouns[x];
    var y = Math.floor(Math.random() * nouns.length);
    var noun2 = nouns[y];
    var z1 = Math.floor(Math.random() * endings.length);
    var ending = endings[z1]
    let tweet = "maybe the real " + noun + " was the " + noun2 + " we made along the way " + ending;
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

  //FILLS YOU WITH DETERMINATION
  if (t === 11) {
    var x = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[x];
    var y = Math.floor(Math.random() * adverbs.length);
    var adverb = adverbs[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verb = verbsIng[z];
    let tweet = "the sight of " + properNoun + " " + adverb + " " + verb + "; it fills me with determination"
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

  // BLANK DID BLANK
  if (t === 13) {
    var x = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[x];
    var y = Math.floor(Math.random() * events.length);
    var event = events[y];
    var z = Math.floor(Math.random() * endings.length);
    var ending = endings[z];
    let tweet = properNoun + " did " + event + ending;
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

  // PUTTING ME ON BLAST
  if (t === 14) {
    var y = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[y];
    var z = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[z];
    var x = Math.floor(Math.random() * endings.length);
    var ending = endings[x];
    let tweet = "why is " + properNoun + " putting me on blast for " + verbIng + " ???? " + ending;
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

  // SAME AS IT EVER WAS
  if (t === 15) {
    var y = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[y];
    var x = Math.floor(Math.random() * places.length);
    var place = places[x];
    let tweet = "and you may find yourself " + verbIng + " " + place;
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

  // MOM CAN YOU PICK ME UP
  if (t === 16) {
    var y = Math.floor(Math.random() * verbsIng.length);
    var verbIng = verbsIng[y];
    var x = Math.floor(Math.random() * properNouns.length);
    var properNoun = properNouns[x];
    var z = Math.floor(Math.random() * endings.length);
    var ending = endings[z]
    let tweet = "mom can you pick me up? " + properNoun + " is " + verbIng + " " + ending;
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
//timer to tweet every hour
setTimeout(dooskbot, 1)
setInterval(dooskbot, 3600000)
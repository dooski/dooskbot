// DICTIONARY: nouns are singular common nouns; properNouns are singular proper nouns; verbsIng are gerund phrases
// verbsEd are past tense verbs; adverbs are adverbs ending in -ly; places are prepositional phrases mostly giving location

//nouns
var things = [{ singular: "stolen egg", plural: "stolen eggs" },
{ singular: "oarfish", plural: "oarfish" },
{ singular: "mosquito", plural: "mosquitoes" },
{ singular: "chameleon", plural: "chameleons" },
{ singular: "water spritz", plural: "water spritzes" },
{ singular: "bucket of riot punch", plural: "buckets of riot punch" },
{ singular: "falcon punch", plural: "falcon punches" },
{ singular: "feeash", plural: "feeash" },
{ singular: "seabird", plural: "seabirds" },
{ singular: "mug from uncle paul's 50th birthday barbecue", plural: "several mugs from uncle paul's 50th birthday barbecue" },
{ singular: "grubhub order", plural: "grubhub orders" },
{ singular: "dictionary", plural: "dictionaries" },
{ singular: "graham cracker", plural: "graham crackers" },
{ singular: "love", plural: "loves" },
{ singular: "mystery", plural: "mysteries" },
{ singular: "doober", plural: "doobers" },
{ singular: "jellybean", plural: "jellybeans" },
{ singular: "airplane", plural: "airplanes" },
{ singular: "pepperoni", plural: "pepperoni" },
{ singular: "blue bird", plural: "blue birds" },
{ singular: "airhead", plural: "airheads" },
{ singular: "dog", plural: "dogs" },
{ singular: "rancho", plural: "ranchos" },
{ singluar: "hockey puck", plural: "hockey pucks" },
{ singular: "butt", plural: "butts" },
{ singular: "blood", plural: "bloods" },
{ singular: "manatee", plural: "manatees" },
{ singular: "tote bag", plural: "tote bags" },
{ singular: "egg", plural: "eggs" },
{ singular: "potion", plural: "potions" },
{ singular: "chai latte", plural: "chai lattes" },
{ singular: "chunk", plural: "chunks" },
{ singular: "hot sauce", plural: "hot sauces" },
{ singular: "boot", plural: "boots" },
{ singular: "plastic bag", plural: "plastic bags" },
{ singular: "slapper", plural: "slappers" },
{ singular: "magnet", plural: "magnets" },
{ singular: "telephone", plural: "telephones" },
{ singular: "girl scout cookie", plural: "girl scout cookies" },
{ singular: "dime", plural: "dimes" },
{ singular: "fake out", plural: "fake outs" },
{ singular: "veggie nugget", plural: "veggie nuggets" },
{ singular: "bargain", plural: "bargains" },
{ singular: "tadpole", plural: "tadpoles" },
{ singular: "fuck up", plural: "fuck ups" },
{ singular: "masterpiece", plural: "masterpieces" },
{ singular: "napkin", plural: "napkins" },
{ singular: "milkshake", plural: "milkshakes" },
{ singular: "champagne", plural: "champagne" },
{ singular: "whale", plural: "whales" },
{ singular: "shark", plural: "sharks" },
{ singular: "whale shark", plural: "whale sharks" },
{ singular: "dirt", plural: "dirt" },
{ singular: "soft pretzel", plural: "soft pretzels" },
{ singular: "hawk", plural: "hawks" },
{ singular: "paper crane", plural: "paper cranes" },
{ singular: "frog", plural: "frogs" },
{ singular: "scooter", plural: "scooters" },
{ singular: "succulent", plural: "succulents" },
{ singular: "Flamin' Hot Cheeto", plural: "Flamin' Hot Cheetos" },
{ singular: "peanut", plural: "peanuts" },
{ singular: "cake", plural: "cakes" },
{ singular: "soy bean", plural: "soy beans" },
{ singular: "sword", plural: "magic swords" },
{ singular: "can of pop", plural: "cans of pop" },
{ singular: "burning cop car", plural: "burning cop cars" },
{ singular: "spongebob screenshot", plural: "spongebob screenshots" },
{ singular: "beautiful hair", plural: "beautiful hairs" },
{ singular: "noosa", plural: "noosa" },
{ singular: "berry", plural: "berries" },
{ singular: "mouthful of spiders", plural: "mouths filled with spiders" },
{ singular: "old haunted guitar", plural: "old haunted guitars" },
{ singular: "chapstick", plural: "chapsticks" },
{ singular: "thing", plural: "things" },
{ singular: "spider", plural: "spiders" },
{ singular: "dirty joke", plural: "dirty jokes" },
{ singular: "payment", plural: "payments" },
{ singular: "subway car", plural: "subway cars" },
{ singular: "album", plural: "albums" },
{ singular: "EP", plural: "EPs" },
{ singular: "kaiser roll", plural: "kaiser rolls" },
{ singular: "picnic basket", plural: "picnic baskets" },
{ singular: "varsity sweater", plural: "varsity sweaters" },
{ singular: "funko pop", plural: "funko pops" },
{ singular: "wet blanket", plural: "wet blankets" },
{ singular: "gear", plural: "gears" },
{ singular: "family sword", plural: "family swords" },
{ singular: "falsehood", plural: "falsehoods" },
{ singular: "theory", plural: "theories" },
{ singular: "mouse", plural: "mice" },
{ singular: "soup", plural: "soups" },
{ singular: "garlic knot", plural: "garlic knots" },
{ singular: "knot", plural: "knots" },
{ singular: "cuppa coffee", plural: "cuppsa coffee" },
{ singular: "pepper", plural: "peppers" },
{ singular: "sprig of mint", plural: "sprigs of mint" },
{ singular: "three-pointer", plural: "tree-pointers" },
{ singular: "personal pan pizza", plural: "personal pan pizzas" },
{ singular: "kitty cat", plural: "kitty cats" },
{ singular: "fat blunt", plural: "fat blunts" }
]
var people = [{ singular: "god", plural: "gods" },
{ singular: "goober", plural: "goobers" },
{ singular: "friend", plural: "friends" },
{ singular: "student", plural: "students" },
{ singular: "werewolf", plural: "werewolves" },
{ singular: "bud", plural: "buds" },
{ singular: "garbage", plural: "garbage" },
{ singular: "buddy", plural: "buddies" },
{ singular: "douchebag", plural: "douchebags" },
{ singular: "senator", plural: "senators" },
{ singular: "villager", plural: "villagers" },
{ singular: "pal", plural: "pals" },
{ singular: "fuckboy", plural: "fuckboys" },
{ singular: "chucklefuck", plural: "chucklefucks" },
{ singular: "virgin", plural: "virgins" },
{ singular: "coward", plural: "cowards" },
{ singular: "rascal", plural: "rascals" },
{ singular: "daddy", plural: "daddys" },
{ singular: "Wife", plural: "Wives" },
{ singular: "earthling", plural: "earthlings" },
{ singular: "quickster", plural: "quicksters" },
{ singular: "pauper", plural: "paupers" },
{ singular: "youngling", plural: "younglings" },
{ singular: "sadboi", plural: "sadbois" },
{ singular: "grandma", plural: "grandmas" },
{ singular: "party-pooper", plural: "party-poopers" },
{ singular: "saint", plural: "saints" },
{ singular: "GAMER", plural: "GAMERS" },
{ singular: "roommate", plural: "roommates" },
{ singular: "tween", plural: "tweens" },
{ singular: "clown", plural: "clowns" },
{ singular: "dirtbag", plural: "dirtbags" },
{ singular: "bootlicker", plural: "bootlickers" },
{ singular: "weeb", plural: "weebs" },
{ singular: "marxist", plural: "marxists" },
{ singular: "weezer fan", plural: "weezer fans" }]

//misc
var states = ["married", "drunk", "high", "philosophical", "sad", "sexy",
    "happy", "lovey dovey", "frisky", "fucked up", "good", "weird", "salty",
    "sick", "dope as hell", "dark"]
var endings = [":)", "/:", "lol", ":')", "this says a lot about our society",
    " :/", "lmao", "ok", "ha haa", "carpe diem!", "waka waka!", "go bills", "o no",
    ":3", "c:", "and thems the breaks!", ":/", "please call me", ", i mean, pump the breaks!!", "and i oop -", "ope", "oof",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var adverbs = ["violently", "gorgeously", "extrmeely", "lovingly", "delightfully", "hastily", "loudly",
    "barely", "menacingly", "rudely", "polietly", "drunkenly", "randomly", "literally", "shittily", "gently",
    "goofily", "longingly", "desperately", "proudly", "excitedly", "shakily"]
var adjectives = ["mean", "salty", "weird", "classic", "fictional", "lucky", "friendly", "sick", "super", "cool",
    "asinine", "good", "dope as hell", "nautical", "nude", "fresh to death", "fresh", "stinky", "wet", "spicy",
    "blue", "jazzy", "stanky", "green", "dank"]

//proper nouns
//realPeople types: culture, history, friend, game, life, tree
var realPeople = [{ name: "me", type: "life" },
{ name: "turnip-head", type: "culture" },
{ name: "the nbc peacock", type: "culture" },
{ name: "the talking dog at the shell shack", type: "culture" },
{ name: "Babe the pig", type: "culture" },
{ name: "pelican man", type: "culture" },
{ name: "that lunch lady who loves you :)", type: "life" },
{ name: "franklin the turtle", type: "culture" },
{ name: "larry boy", type: "culture" },
{ name: "terry gross", type: "culture" },
{ name: "madonna", type: "culture" },
{ name: "Jeb!", type: "history" },
{ name: "fart vader", type: "culture" },
{ name: "mr. buckley", type: "life" },
{ name: "glenn close", type: "culture" },
{ name: "gillian anderson", type: "culture" },
{ name: "the guy who tried to burn down buffalo city hall", type: "culture" },
{ name: "the coen brothers", type: "culture" },
{ name: "guy fieri's bottle of bleach", type: "culture" },
{ name: "steve martin's banjo", type: "culture" },
{ name: "helen obama carter", type: "culture" },
{ name: "chef bobby flay", type: "culture" },
{ name: "king george", type: "history" },
{ name: "meryl streep's vocal coach", type: "culture" },
{ name: "bob odenkirk", type: "culture" },
{ name: "BIBLICAL JONAH", type: "history" },
{ name: "spanky the squirrel", type: "tree" },
{ name: "fred armisen", type: "culture" },
{ name: "mail robot, a robot that delivers mail,", type: "life" },
{ name: "lionel richie", type: "culture" },
{ name: "patton oswalt", type: "culture" },
{ name: "chubby jonah hill", type: "culture" },
{ name: "skinny jonah hill", type: "culture" },
{ name: "the well-known @sarah_ging", type: "friend" },
{ name: "punk rock chicken", type: "tree" },
{ name: "this dooskbot", type: "life" },
{ name: "timmy and tommy nook", type: "game" },
{ name: "the ghost-protector of the great barrier reef's bleached corpse", type: "life" },
{ name: "squidward tentpoles", type: "culture" },
{ name: "swagner", type: "friend" },
{ name: "chip", type: "friend" },
{ name: "cramorant", type: "game" },
{ name: "goldie", type: "game" },
{ name: "kapp'n", type: "game" },
{ name: "santiago", type: "friend" },
{ name: "julian casablancas", type: "culture" },
{ name: "sydnee mcelroy", type: "culture" },
{ name: "yellow yoshi (bisexual)", type: "game" },
{ name: "gritty", type: "culture" },
{ name: "captain bones", type: "life" },
{ name: "crazy bones", type: "life" },
{ name: "foodtimejakob", type: "life" },
{ name: "heyitsedible", type: "life" },
{ name: "guthix", type: "game" },
{ name: "jason funderburker", type: "culture" },
{ name: "rachelle", type: "friend" },
{ name: "meg", type: "friend" },
{ name: "hillary", type: "friend" },
{ name: "matt", type: "friend" },
{ name: "papyrus", type: "game" },
{ name: "sans", type: "game" },
{ name: "undyne", type: "game" },
{ name: "helena bonham carter", type: "culture" },
{ name: "justin trudeau", type: "history" },
{ name: "rob thomas", type: "culture" },
{ name: "alex turner", type: "culture" },
{ name: "candy isle", type: "culture" },
{ name: "lydia", type: "friend" },
{ name: "mighty sapling warrior", type: "tree" },
{ name: "shiny wooloo", type: "game" },
{ name: "tom nook", type: "game" },
{ name: "warlord acorn", type: "tree" },
{ name: "barack obama", type: "history" },
{ name: "magic johnson", type: "game" },
{ name: "dominic the donkey", type: "culture" },
{ name: "the italian christmas donkey", type: "culture" },
{ name: "meryl streep", type: "culture" },
{ name: "chelsea", type: "friend" },
{ name: "calamity ganon", type: "game" },
{ name: "kate winslet", type: "culture" },
{ name: "greta gerwig", type: "culture" },
{ name: "brie larson", type: "culture" },
{ name: "keri russell", type: "culture" },
{ name: "dumb dead idiot john mccain", type: "history" },
{ name: "momo", type: "culture" },
{ name: "celeste", type: "game" },
{ name: "pashmina", type: "game" },
{ name: "Andre 3000", type: "culture" },
{ name: "yoshi", type: "game" },
{ name: "kk slider", type: "culture" },
{ name: "santa claus", type: "history" },
{ name: "doctor kran", type: "tree" },
{ name: "ridley", type: "game" },
{ name: "mitski", type: "culture" },
{ name: "lucy dacus", type: "culture" },
{ name: "japanese breakfast", type: "culture" },
{ name: "toby fox", type: "culture" },
{ name: "mae borowski", type: "game" },
{ name: "mike richter", type: "game" },
{ name: "the titular alien from Alien", type: "culture" },
{ name: "non-canonical jar jar binks", type: "culture" },
{ name: "canon jar jar", type: "culture" },
{ name: "ronan farrow", type: "culture" },
{ name: "pedro martinez", type: "game" },
{ name: "amari cooper", type: "game" },
{ name: "pawniard", type: "game" },
{ name: "marowak", type: "game" },
{ name: "dunsparce", type: "game" },
{ name: "Chili", type: "game" },
{ name: "Chai", type: "game" },
{ name: "canuck the @buffalolet owl", type: "game" },
{ name: "uncle sam", type: "history" },
{ name: "garnet", type: "culture" },
{ name: "the perf @girlfoyle", type: "friend" },
{ name: "the chill @hellafroio", type: "friend" },
{ name: "steven universe", type: "culture" },
{ name: "BMO", type: "friend" },
{ name: "daymor", type: "friend" },
{ name: "avy", type: "friend" },
{ name: "big sean", type: "culture" },
{ name: "magalor", type: "game" },
{ name: "deputy director of the parks department leslie knope", type: "culture" },
{ name: "will, my friend", type: "friend" },
{ name: "izzy", type: "friend" },
{ name: "bart the chameleon", type: "friend" },
{ name: "my captain and yours, jack eichel", type: "game" },
{ name: "jack eichel", type: "game" },
{ name: "bernie", type: "history" },
{ name: "elizabeth warren", type: "history" },
{ name: "the original rascal", type: "tree" },
{ name: "human girl @andrea_oaks", type: "friend" },
{ name: "greninja", type: "game" },
{ name: "donkey kong", type: "game" },
{ name: "diddy kong", type: "game" },
{ name: "kirby", type: "game" },
{ name: "mr funk", type: "life" },
{ name: "my ex", type: "life" },
{ name: "human dad @asst_to_hutch", type: "friend" },
{ name: "that son of a bunch @dnmckn", type: "friend" },
{ name: "my roommate", type: "life" },
{ name: "the fart", type: "life" },
{ name: "inkling", type: "game" },
{ name: "Doctor Who", type: "culture" },
{ name: "class traitor", type: "life" },
{ name: "CAPTAIN MAGMA!", type: "culture" },
{ name: "isabelle", type: "game" },
{ name: "andrea's favorite plant", type: "friend" },
{ name: "war criminal George Bush", type: "history" },
{ name: "bulbasaur", type: "game" },
{ name: "bulbasaur", type: "friend" },
{ name: "hutch", type: "friend" },
{ name: "zoey the dog", type: "friend" },
{ name: "andrea", type: "friend" },
{ name: "dooski", type: "friend" },
{ name: "king nightmare spiderlord", type: "tree" },
{ name: "hillary", type: "friend" },
{ name: "mudkip", type: "game" },
{ name: "the one and only rachel berg", type: "friend" }]
var places = [{ solo: "Kirby's Dreamland", prep: "in Kirby's Dreamland" },
{ solo: "pride parade", prep: "at the pride parade" },
{ solo: "typhoon lagoon wave pool", prep: "in the typhoon lagoon wave pool" },
{ solo: "payless shoesource", prep: "in line at payless shoesource" },
{ solo: "pizza hut", prep: "at the pizza hut" },
{ solo: "taco bell", prep: "at the taco bell" },
{ solo: "combination pizza hut and taco bell", prep: "at the combination pizza hut and taco bell" },
{ solo: "jamaica avenue", prep: "on jamaica avenue" },
{ solo: "house", prep: "in the house tonight" },
{ solo: "robot pirate island", prep: "on robot pirate island" },
{ solo: "nightmare tarantula island", prep: "on nightmare tarantula island" },
{ solo: "nightmare scorpion island", prep: "on nightmare scorpion island" },
{ solo: "secret empire of the mighty oak trees", prep: "within the secret empire of the mighty oak trees" },
{ solo: "nightmare spiderlord's chambers", prep: "inside nightmare spiderlord's chambers" },
{ solo: "Vatican", prep: "in the Vatican" },
{ solo: "quebec (province)", prep: "in quebec (province)" },
{ solo: "quebec city", prep: "in quebec city" },
{ solo: "milk fridge at wegmans", prep: "inside the milk fridge at wegmans" },
{ solo: "lancelot parking lot of dulac", prep: "in the lancelot parking lot of dulac" },
{ solo: "dooskbot server, bayBEE", prep: "in the dooskbot server, bayBEE" },
{ solo: "Federal Donuts", prep: "in line at Federal Donuts" },
{ solo: "dumpster", prep: "under a dumpster" },
{ solo: "Amtrak train", prep: "on Amtrak" },
{ solo: "SEPTA train", prep: "on SEPTA" },
{ solo: "LIRR train", prep: "on the LIRR" },
{ solo: "work", prep: "at work" },
{ solo: "Mighty Taco", prep: "at Mighty Taco" },
{ solo: "Phoebe Bridger's concert", prep: "at the Phoebe Bridger's concert" },
{ solo: "dock", prep: "by the docks" },
{ solo: "classic active shootout", prep: "near one of those classic active shootouts" },
{ solo: "chili's", prep: "at the chili's" },
{ solo: "applebee's bathroom", prep: "in the applebee's bathroom" },
{ solo: "foreign land", prep: "on foreign land" },
{ solo: "Long Island Sound", prep: "in the Long Island Sound" },
{ solo: "heaven", prep: "in heaven" },
{ solo: "Deep Sea Metro", prep: "in the Deep Sea Metro" },
{ solo: "belly of a whale", prep: "in the belly of a whale, like Jonah" },
{ solo: "woody from toy story's boot", prep: "in woody from toy story's boot" },
{ solo: "Red Couch", prep: "on Red Couch" },
{ solo: "Philadelphia sports riot", prep: "during a Philadelphia sports riot" },
{ solo: "peach mag reading", prep: "at the peach mag reading" },
{ solo: "Clam Bake", prep: "at the Clam Bake" },
{ solo: "airport", prep: "at the airport" },
{ solo: "baggage claim", prep: "at baggage claim" },
{ solo: "Buffalo", prep: "where we truly met" },
{ solo: "Rochester", prep: "where we joined body and soul together" },
{ solo: "Hawaii", prep: "in Hawaii!" },
{ solo: "peach mag's website", prep: "in peach mag's website" }]

//verbs
var verbsObject = [{
    presentFirst: "watch", presentThird: "watches",
    past: "watched", ing: "watching"
},
{
    presentFirst: "punt", presentThird: "punts",
    past: "punted", ing: "punting"
},
{
    presentFirst: "smoke", presentThird: "smokes",
    past: "smoked", ing: "smoking"
},
{
    presentFirst: "buy", presentThird: "buys",
    past: "bought", ing: "buying"
},
{
    presentFirst: "eat", presentThird: "eats",
    past: "ate", ing: "eating"
},
{
    presentFirst: "lose", presentThird: "loses",
    past: "lost", ing: "losing"
},
{
    presentFirst: "lick", presentThird: "licks",
    past: "licked", ing: "licking"
},
{
    presentFirst: "absorb", presentThird: "absorbs",
    past: "absorbed", ing: "absorbing"
},
{
    presentFirst: "remember", presentThird: "remembers",
    past: "remembered", ing: "remembering"
},
{
    presentFirst: "weep on", presentThird: "weeps on",
    past: "wept on", ing: "weeping on"
},
{
    presentFirst: "snort", presentThird: "snorts",
    past: "snorted", ing: "snorting"
},
{
    presentFirst: "draw a little face on", presentThird: "draws a little face on",
    past: "drew a little face on", ing: "drawing a little face on"
},
{
    presentFirst: "ban", presentThird: "bans",
    past: "banned", ing: "banning"
}
]
var verbsPerson = [{
    presentFirst: "date", presentThird: "dates",
    past: "dated", ing: "dating"
},
{
    presentFirst: "panic hug", presentThird: "panic hugs",
    past: "panic hugged", ing: "panic hugging"
},
{
    presentFirst: "vibe with", presentThird: "vibes with",
    past: "vibed with", ing: "vibing with"
},
{
    presentFirst: "flex on", presentThird: "flexes on",
    past: "flexed on", ing: "flexing on"
},
{
    presentFirst: "harass", presentThird: "harasses",
    past: "harassed", ing: "harassing"
},
{
    presentFirst: "fall in love with", presentThird: "falls in love with",
    past: "fell in love with", ing: "falling in love with"
},
{
    presentFirst: "unleash", presentThird: "unleashes",
    past: "unleashed", ing: "unleashing"
},
{
    presentFirst: "cry with", presentThird: "cries with",
    past: "cried with", ing: "crying with"
},
{
    presentFirst: "defeat", presentThird: "defeats",
    past: "defeated", ing: "defeating"
},
{
    presentFirst: "dab on", presentThird: "dabs on",
    past: "dabbed on", ing: "dabbing on"
},
{
    presentFirst: "chuckle at", presentThird: "chuckles at",
    past: "chuckled at", ing: "chuckling at"
},
{
    presentFirst: "eat", presentThird: "eats",
    past: "ate", ing: "eating"
},
{
    presentFirst: "fake out", presentThird: "fakes out",
    past: "faked out", ing: "faking out"
},
{
    presentFirst: "riff with", presentThird: "riffs with",
    past: "riffed with", ing: "riffing with"
},
{
    presentFirst: "scream with", presentThird: "screams with",
    past: "screamed with", ing: "screaming with"
},
{
    presentFirst: "scream at", presentThird: "screams at",
    past: "screamed at", ing: "screaming at"
},
{
    presentFirst: "just GAME", presentThird: "just GAMES",
    past: "just GAMED", ing: "just GAMING"
},
{
    presentFirst: "don't believe in", presentThird: "doesn't believe in",
    past: "didn't believe in", ing: "not believing in"
}]
var verbsGeneral = ["feel", "be", "exist", "win", "kill", "feel", "pee", "sing", "get dunked on", "dab", "catch the excitemet", "sniff", "bark", "throw hands", "sob", "collapse", "melt", "pop",
    "smell", "eat", "be smooth", "flirt", "vaporize", "swim", "fly", "flourish", "thrive", "vibe"]
var ings = [{ alt1: "rigging a primary", alt2: "rigging an election", alt3: "rigging a sloop" },
{ alt1: "watching a dad trying not to cry during a WWII documentary", alt2: "watching a WWII documentary with a dad", alt3: "watching a dad tear up during the opening scene of Saving Private Ryan" },
{ alt1: "killing them with kindness", alt2: "killing them with friendship", alt3: "smothering them with love" },
{ alt1: "hacking JSTOR", alt2: "hacking the Library of Congress", alt3: "hacking a student loan database" },
{ alt1: "crossing the picket line", alt2: "crossing the Potomac", alt3: "crossing the animals (?)" },
{ alt1: "stepping in shit at the dog park", alt2: "stepping in shit at the bank", alt3: "stepping in shit at the baseball game" },
{ alt1: "not brushing their teeth", alt2: "not flossing", alt3: "swallowing mouthwash" },
{ alt1: "going back in time and killing andrew jackson", alt2: "going back in time and burning the garage Amazon was made in", alt3: "going back in time and killing hitler" },
{ alt1: "going back in time and founding NYC but calling it Butt City", alt2: "going back in time and founding NYC but calling it Dansylvania", alt3: "going back in time and sinking the Lusitania again" },
{ alt1: "being a normie", alt2: "being a virgin", alt3: "being a reeeeal dick" },
{ alt1: "giving up on love", alt2: "giving up the gun", alt3: "giving it up for the opening band" },
{ alt1: "showing my best friend squidward to everybody in town", alt2: "refusing to serve straight people for a change", alt3: "eating rocks" },
{ alt1: "losing the egg hunt", alt2: "winning the egg hunt", alt3: "calling the egg hunt a draw" },
{ alt1: "'wow' reacting only", alt2: "asking for Fs in the chat", alt3: "giving an F in the chat" },
{ alt1: "cracking open a cold one with the void", alt2: "cracking open a cold one with the boys", alt3: "cracking open a cold one with the boys" },
{ alt1: "letting everyone know the boys are back in town", alt2: "imagining the boys being back in town", alt3: "wishing the boys were back in town" },
{ alt1: "snacking on a bowl of croutons", alt2: "eating the chinese food leftovers at 2am", alt3: "making chocolate pudding" },
{ alt1: "camping in the backyard", alt2: "camping in the bathroom", alt3: "camping out in front of the wawa" },
{ alt1: "bicycle kicking the christmas ham", alt2: "bicycle kicking a nazi", alt3: "bicycle kicking jeff bezos's head into the sun" },
{ alt1: "playin' in the sprinkler", alt2: "splashing in a puddle like a lil duckling", alt3: "rolling in mud" },
{ alt1: "having a bowl of nails for breakfast", alt2: "having a bowl of nails for breakfast without any milk", alt3: "failing to open a new bottle of ketchup" },
{ alt1: "screaming into a body pillow", alt2: "screaming into the proverbial void", alt3: "screaming into the very literal void" },
{ alt1: "burning the pizza", alt2: "burning the man", alt3: "burning a holy relic and making s'mores" },
{ alt1: "chugging a half gallon of heavy cream", alt2: "chugging pudding", alt3: "chugging a liquified burger" },
{ alt1: "spilling milk everywhere", alt2: "spilling a lil bit of red wine on some linens", alt3: "spilling the tea" },
{ alt1: "looking fresh", alt2: "looking fresh to death", alt3: "looking fresh as hell" },
{ alt1: "looking fresh af", alt2: "looking fresh as heck", alt3: "looking freshy fresh" },
{ alt1: "snatching a relic", alt2: "snatching a bag of goldfish from 7/11", alt3: "snatching a wallet" },
{ alt1: "promoting sustainable forestry", alt2: "promoting protections for sex workers", alt3: "promoting their food blog" },
{ alt1: "hosting an outdoor barbecue for gay people", alt2: "hosting an outdoor barbecue with the boys from the office", alt3: "hosting an outdoor barbecue for no one" },
{ alt1: "constructing a guillotine", alt2: "constructing a guillotine", alt3: "constructing a guillotine" },
{ alt1: "savoring the delicious taste of airheads", alt2: "savoring the spicy taste of airheads", alt3: "savoring the succulent taste of airheads" },
{ alt1: "putting on the ritz", alt2: "pudding on the ritz", alt3: "pudding on the ritz cracker (haha)" },
{ alt1: "asking out my crush", alt2: "asking me out", alt3: "asking out the pizza boy" },
{ alt1: "stealing flowers", alt2: "stealing turnips", alt3: "stealing whole trees" },
{ alt1: "crying like a tall child", alt2: "not telling mitski the war she fell in love with ended", alt3: "opening up the window to hear sounds of people" },
{ alt1: "sealing jeff bezos away for eternity", alt2: "sealing elon musk away for eternity", alt3: "sealing the deal" },
{ alt1: "doing a little dance on the catwalk", alt2: "licking all the cupcakes so no one else can have them", alt3: "bucking the trend" },
{ alt1: "throwing out my important tax documents", alt2: "throwing out my bug friends", alt3: "throwing out a desktop computer from 2007" },
{ alt1: "turning back", alt2: "turning this car around", alt3: "turning back time to the good ol' days" },
{ alt1: "squeezing out the last bit of toothpaste", alt2: "squeezing and wheezing", alt3: "squeezing the market" },
{ alt1: "ordering pizza", alt2: "ordering indian food", alt3: "ordering chinese food" },
{ alt1: "ordering systemic change in our society", alt2: "ordering the fall of nations", alt3: "ordering military action against canada" },
{ alt1: "spreading the good word of christ", alt2: "spreading COVID-19 on purpose", alt3: "spreading lies" },
{ alt1: "rolling down a hill", alt2: "rolling on molly", alt3: "rolling on in" },
{ alt1: "falling right of the sky", alt2: "missing the panty raid", alt3: "repeating that you're going to miss the panty raid" },
{ alt1: "dropping the load", alt2: "putting all my amiibo in the washing machine", alt3: "literally just vibing" },
{ alt1: "fucking up", alt2: "fucking up big time", alt3: "fucking up all over the place" },
{ alt1: "invading iraq", alt2: "invading afghanistan", alt3: "invading kuwait" },
{ alt1: "fumbling the ball in the red zone", alt2: "fumbling for words", alt3: "fumbling a first kiss" },
{ alt1: "spinning around and around", alt2: "reminding you that Dan is quite single and their DMs are open", alt3: "spinning aroudn and around and around" },
{ alt1: "scheming on the low", alt2: "scheming", alt3: "scheming to overthrow the county legislature" },
{ alt1: "jumping", alt2: "pumping", alt3: "thumping" },
{ alt1: "showering in pig's blood like in that one scene in episode three season one of the FX series, Fargo", alt2: "browsing a sex shop as if it were a target", alt3: "brushing up on german history" },
{ alt1: "birding", alt2: "birding", alt3: "birding" },
{ alt1: "grasping at straws", alt2: "losing their shit", alt3: "reminding you that Dan is very much single" },
{ alt1: "punishing war criminals aka most US presidents over the last 50 years, and pretty much most before that too", alt2: "punishing strangers for their transgressions", alt3: "punishing me" },
{ alt1: "dancing in the street", alt2: "dancing on the ceiling", alt3: "dancing like nobody's watching" },
{ alt1: "cheating on their spouse", alt2: "cheating on their math test", alt3: "cheating at animal crossing but explaining it isnt cheating, its actually just an exploit" },
{ alt1: "doing a moby dick speedrun", alt2: "doing a hollow knight speedrun", alt3: "doing a marriage speedrun (yikes)" },
{ alt1: "becoming the real cool cat", alt2: "becoming a beautiful moon", alt3: "becoming christ" },
{ alt1: "breaking up with me", alt2: "breaking up with Dan, who is single and their DMs are open", alt3: "breaking up monopolies" },
{ alt1: "trying to prove a point", alt2: "dying on this hill", alt3: "explaining that food shouldn't taste good" }]

// word picker functions
//things
function thingSingular() {
    let a = Math.floor(Math.random() * things.length)
    let thing = things[a].singular
    return thing
}
function thingPlural() {
    let a = Math.floor(Math.random() * things.length)
    let thing = things[a].plural
    return thing
}

//people
function personSingular() {
    let a = Math.floor(Math.random() * personSingular.length)
    let person = people[a].singular
    return person
}
function personPlural() {
    let a = Math.floor(Math.random() * personPlural.length)
    let person = people[a].plural
    return person
}
function realPerson() {
    let a = Math.floor(Math.random() * realPeople.length)
    let person = realPeople[a].name
    return person
}

//places
function placePrep() {
    let a = Math.floor(Math.random() * places.length)
    let place = places[a].prep
    return place
}
function placeSolo() {
    let a = Math.floor(Math.random() * places.length)
    let place = places[a].solo
    return place
}

//misc
function state() {
    let a = Math.floor(Math.random() * states.length)
    let state = states[a]
    return state
}
function ending() {
    let a = Math.floor(Math.random() * endings.length)
    let ending = endings[a]
    return ending
}
function endingForSure() {
    let a = Math.floor(Math.random() * 14)
    let ending = endings[a]
    return ending
}
function adverb() {
    let a = Math.floor(Math.random() * adverbs.length)
    let adverb = adverbs[a]
    return adverb
}
function adjective() {
    let a = Math.floor(Math.random() * adjectives.length)
    let adjective = adjectives[a]
    return adjective
}
function lemongrab() {
    let L = Math.floor(Math.random() * 3)
    if (L === 0) {
        let a = Math.floor(Math.random() * 6)
        if (a === 0) {
            let reply = "all your fault!!!!"
            return reply
        } else if (a === 1) {
            let reply = "ALL YOUR FAULT!!!"
            return reply
        } else if (a === 2) {
            let reply = "this is all YOUR fault!!"
            return reply
        } else if (a === 3) {
            let reply = "THIS IS ALL YOUR FAULT!!"
            return reply
        } else if (a === 4) {
            let reply = "this is all your fault!!!!!!"
            return reply
        } else if (a === 5) {
            let reply = "all your faULT!!!!!!!!"
            return reply
        } return reply
    } else if (L === 1) {
        let a = Math.floor(Math.random() * 5)
        if (a === 0) {
            let reply = "you made me!!!"
            return reply
        } else if (a === 1) {
            let reply = "YOU MADE MEEEE!!!!!"
            return reply
        } else if (a === 2) {
            let reply = "YOU MADE ME!!"
            return reply
        } else if (a === 3) {
            let reply = "YOOOOOOU MADE MEE!!!!!"
            return reply
        } else if (a === 4) {
            let reply = "yooooooou maade MEE!!"
            return reply
        } return reply
    } else if (L === 2) {
        let a = Math.floor(Math.random() * 3)
        if (a === 0) {
            let reply = "YOU MADE ME LIKE THIS, ITS ALL YOUR FAULT!!!!"
            return reply
        } else if (a === 1) {
            let reply = "i am alone and you made me like this"
            return reply
        } else if (a === 2) {
            let reply = "i am ALONE and you made me like this!!!!!"
            return reply
        } return reply
    }
}

//verbs
function verbObjectFirst() {
    let a = Math.floor(Math.random() * verbsObject.length)
    let verb = verbsObject[a].presentFirst
    return verb
}
function verbObjectThird() {
    let a = Math.floor(Math.random() * verbsObject.length)
    let verb = verbsObject[a].presentThird
    return verb
}
function verbObjectPast() {
    let a = Math.floor(Math.random() * verbsObject.length)
    let verb = verbsObject[a].past
    return verb
}
function verbObjectIng() {
    let a = Math.floor(Math.random() * verbsObject.length)
    let verb = verbsObject[a].ing
    return verb
}
function verbPersonFirst() {
    let a = Math.floor(Math.random() * verbsPerson.length)
    let verb = verbsPerson[a].presentFirst
    return verb
}
function verbPersonThird() {
    let a = Math.floor(Math.random() * verbsPerson.length)
    let verb = verbsPerson[a].presentThird
    return verb
}
function verbPersonPast() {
    let a = Math.floor(Math.random() * verbsPerson.length)
    let verb = verbsPerson[a].past
    return verb
}
function verbPersonIng() {
    let a = Math.floor(Math.random() * verbsPerson.length)
    let verb = verbsPerson[a].ing
    return verb
}
function verbIng() {
    let a = Math.floor(Math.random() * ings.length)
    let b = Math.floor(Math.random() * 3)
    if (b === 0) {
        let verb = ings[a].alt1
        return verb
    }
    if (b === 1) {
        let verb = ings[a].alt2
        return verb
    }
    if (b === 2) {
        let verb = ings[a].alt3
        return verb
    }
    let verb = ings[a]
    return verb
}
function verbGeneral() {
    let a = Math.floor(Math.random() * verbsGeneral.length)
    let verb = verbsGeneral[a]
    return verb
}


module.exports = {
    thingSingular,
    thingPlural,
    personSingular,
    personPlural,
    realPerson,
    placePrep,
    placeSolo,
    state,
    ending,
    endingForSure,
    verbObjectFirst,
    verbObjectThird,
    verbObjectPast,
    verbObjectIng,
    verbPersonFirst,
    verbPersonThird,
    verbPersonPast,
    verbPersonIng,
    verbIng,
    verbGeneral,
    adverb,
    adjective,
    lemongrab,
    things,
    people,
    states,
    endings,
    adverbs,
    adjectives,
    realPeople,
    places,
    verbsObject,
    verbsPerson,
    verbsGeneral,
    ings
}
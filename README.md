DOOSKBOT
v 0.2.5
Author: Dan McKeon & Terry Clines

1. PURPOSE
Dooskbot is a Twitter bot that generates a tweet using variables for different parts of speech and set phrases, and replies to other user's replies. Those variables (referred to as Dictionary) give Dooskbot a set series of topics and interests while giving it enough options to avoid negative repition. The goal is for Dooskbot to act as a Twitter mimic.

2. FEATURES
a. Current (as of v 0.2.5)
- Dooskbot picks one of 24 tweet formats every hour and runs a series of functions that pulls from a dictionary of different arrays to construct a tweet. It then sends the tweet out with no human approval or input once the script is running. Several tweet options are grouped and have a secondary picking system.

- Dooskbot has a high chance of replying to replies to its tweets, though it isn't every single time. The reply does a very rudamentary analysis of the tweet it is replying to, looking at who it is from and certain key words in the tweet, which then influences what its reply will be. If it chooses not to reply, it will instead like the tweet.

- D O O S K B O T website runs a version of tweet.js and reads it back in the style of Mettaton from Undertale.

b. Planned development 
(v 0.3)
- Migrate dictionary.js to use monogodb. This will allow for the planned word learning futures in v 0.4.
- Expanded reply forms to include more deep analysis. Will run the sentence content against its own dictionary for clues.
- Timed tweets to tweet at certain times to mimic that of how an actual twitter user would use it, rather than every single hour.
- Convert D O O S K B O T to run as a React app. This will allow for future development plans to better sync up with the Twitter account.
- More tweet formats of casual daily updates.

(v 0.4)
- Word learning using the wordpos module. Should run some checks to make sure it is taking higher-quality words and not ones uses very infrequently or that could be problematic when used out of context.
- Synonym functionality with Merriam-Webster API to occasionally vary up language choice.
- Making occasional threads.

3. CURRENT ISSUES
- Dooskbot replies are very general currently with very little input from the tweet it is replying to. Future development should be focused on more complex analysis of tweets.
- Functions should be converted to async functions. While it currently leads to very rare undefined words, the more complicated the tweet generation process gets, the more this issue will pop up. This will also allow for much more detailed reply analysis.


4. Terry's Clause :)
- :)
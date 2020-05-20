DOOSKBOT
v 0.2
Author: Dan McKeon & Terry Clines

1. PURPOSE
Dooskbot is a Twitter bot that generates a tweet using variables for different parts of speech and set phrases, and replies to other user's replies. Those variables (referred to as Dictionary) give Dooskbot a set series of topics and interests while giving it enough options to avoid negative repition. The goal is for Dooskbot to act as a Twitter mimic.

2. FEATURES
a. Current (as of v 0.2)
- Dooskbot picks one of 20 tweet formats every hour and runs a series of functions that pulls from a dictionary of different arrays to construct a tweet. It then sends the tweet out with no human approval or input once the script is running. For some word-types, Dooskbot will remember words used recently and be less likely to pick them for a period of time.

- Dooskbot has a high chance of replying to replies to its tweets, though it isn't every single time. The reply does a very rudamentary analysis of the tweet it is replying to, looking at who it is from and certain key words in the tweet, which then influences what its reply will be.

- Dooskbot Test Kitchen is a simple HTML page that runs the tweet generation script but returns the generated tweet in a text box instead of tweeting it out. This is currently being rebuilt as part of the planned v 0.5.

b. Planned development 
(v 0.3)
- Expanded dictionary.
- Expanded reply forms.
- Mood generation based on real-world factors to influence tweet content and frequency.

3. CURRENT ISSUES
- Dooskbot replies are very general currently with very little input from the tweet it is replying to. Future development should be focused on more complex analysis of tweets.

4. Terry's Clause :)
- :)
DOOSKBOT
v 0.1.6
Author: Dan McKeon

1. PURPOSE
Dooskbot is a Twitter bot that generates a tweet using variables for different parts of speech and set phrases, like a javascript mad libs. Those variables (referred to as Dictionary) give Dooskbot a set series of topics and interests while giving it enough options to avoid negative repition. The purpose is simply a Twitter bot that makes mildly incoherent jokes.

2. FEATURES
a. Current (as of v 0.1.6)
- tweet.js generates a random number between 0 and 17, meaning there is a % chance for each number being picked. This is the 't' value. Each type of tweet is held an if statement activated by unique values of 't.' There is also a shiny value generated. There is a 1 in 70 chance of the shiny value returning true, but the t value must also return a certain number from 0 to 17. If this happens, there will be a shiny tweet. (This is a Pokemon reference and really has no bearing on anything besides being rare.)

- The tweets pull from the Dictionary based on random number generators that use the length of each array. For tweets that have two of the same parts of speech, there is no prevention of doubling and using the same part of speech again.

- There is also what's called the Dooskbot Test Kitchen, a simple HTML page that runs the tweet.js script but returns the generated tweet as a text box instead of tweeting it out.

b. Planned development 
(v 0.2)
- Automatic, scheduled tweeting
- Reply tweets
- Memory of which words were used recently, and a reduced likelihood they be used again soon
(v 0.3)
- User word suggestions sent through the Test Kitchen
(v 0.4)
- Weighted values to words
- Basic analysis to replies

3. CURRENT ISSUES
- The code was written as I was learning how to code, and so at some point will require a massive amount of clean up, preferably before v 0.2 is released. This clean up will involve sepearting the Dictionary from the main tweet.js file to allow the Test Kitchen to be more easily synced up.

4. Terry's Clause :)
DOOSKBOT
v 0.1
Author: Dan McKeon

1. PURPOSE
Dooskbot is a Twitter bot that generates a tweet using variables for different parts of speech and set phrases, like a javascript mad libs. Those variables (referred to as Dictionary) give Dooskbot a set series of topics and interests while giving it enough options to avoid negative repition. The purpose is simply a goofy Twitter bot!

2. FEATURES
a. Current (as of v 0.1)
- tweet.js generates a random number between 0 and 9, meaning there is a 10% chance for each number being picked. This is the 't' value. Each type of tweet is held an if statement activated by unique values of 't.' Three types have two acceptable 't' values, meaning they have a 20% chance of being tweeted. The types are:
-------
DON'T TEXT (20% chance)

---
AS A TREAT (10% chance)

---
TRANS RIGHTS (10% chance)

---
AND I OOP (10% chance)

---
I SHIP (10% chance)

---
ALL blank KNOWS IS (20% chance)

---
HAHA JUST KIDDING (20% chance)

---
- The tweets pull from the Dictionary based on random number generators that use the length of each array. For tweets that have two of the same parts of speech, there is no prevention of doubling and using the same part of speech again.

b. Planned development 
(v 0.2)
- Automatic, scheduled tweeting
- More tweet types / reply tweets
(v 0.3)
- Weighted values to words
- Basic analysis to replies
(v 0.4)
-
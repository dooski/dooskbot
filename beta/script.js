var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writeTweet() {
  var text = dooskbot(tweet)
  var tweetText = document.querySelector("#password");

  tweetText.value = text;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writeTweet);


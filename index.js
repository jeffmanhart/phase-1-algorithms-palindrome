const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  // Write your algorithm here
  wordArray = word.split('')
  let count = wordArray.length -1
  for (let i = 0; i < wordArray.length; i++) {
    const forwardLetter = wordArray[i];
    const backwardLetter = wordArray[count];
    count--
    if(forwardLetter===backwardLetter){
      return true
    }else{
      return false
    }
  }
    
}


/* 
  Add your pseudocode here
  take in string
  splitletters into array
  loop through the last letter in the array to compare to the front letters
  return true or false
*/

/*
  Add written explanation of your solution here
  isPalindrome() takes in a a single string
  isPalindrome() then splits the word into an array of characters 
  defined another counter to the length of the array
  loop through the word array incrementing the index up every loop
  also decrement the secondary counter assigned to the array length
  if both letters are equal then return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("moom"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("!wow!"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("foobar"));
}

module.exports = isPalindrome;

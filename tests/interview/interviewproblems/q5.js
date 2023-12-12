// Alternating Capitals(Caps)
// Write a function that takes in a string of letters
// and returns a sentence in which every other is capitalized. 

// input: "you are a beautiful person."
// ouput: "yOu ArE bEaUtIfUl PeRsOn."


function capSecLet(str) {
  //assemble each charachter into a new string
  let newStr = "";
  //loop the string
  for (let i = 0; i < str.length; i++) {
    //upper every charachter with an even index
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(capSecLet("you are a beautiful person"));


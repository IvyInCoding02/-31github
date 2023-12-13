// Alternating Capitals(Caps)
// Write a function that takes in a string of letters
// and returns a sentence in which every other is capitalized. 

// input: "you are  beautiful person."
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

//REPEAT THE CODE SOLVING
// function Caps(str){
//   //I have to asseble each character into a new string
//   newStr = "";
//   //I have to loop through the string to find every other character 
//   for(let i = 0; i < str.length; i++){
//     //upper every character with an even index
//     if(i % 2 === 0){
//       newStr +=str[i].toUpperCase();
//     }else {
//       newStr += str[i]
//     }
//   }
//   return newStr;
// }

console.log(capSecLet("you are a beautiful person"));


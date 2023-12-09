//Write a function that accepts a string as an argument
//The function should capitalize ONLY every other letter in the string
//The function should then return converted String

// Solution:
// Clarifying qustions:
// 1. " " => " " (if it is empty string, then it should return an empty string)
// 2. letter === Character
// 3. Starting caps at letter 0

// Example: 
// "hello" => "HeLlO";
// "Yo eli" => "Yo eLi";
// "Hello????" => "HeLlO????"
// 'HELLO' => "HeLlO"

const capLetters= (string) =>{
    //loop through string
    let capString = "";
    for(i = 0; string.length; i++){
       //change the even indices to capital letters
    if(i % 2 ===0){
      capString = capString + string[i].toUpperCase(); //H
      //capString += string[i].toUpperCase();
    }else {
      capString += string[i].toLowerCase();
    }
    }
    return capString;
  }
  
  console.log("hello");
  console.log("yo eli");
  console.log("hello????");
  console.log("Hello");
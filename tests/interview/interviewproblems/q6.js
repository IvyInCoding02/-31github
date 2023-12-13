// toTitleCase 
// Write a function that will capitalize every word in a sentence.

// Example of Input: "everything everything all at once."
// Example of Output: "Everything, Everything, All At Once."

// First, write a function that takes in one word and capitalizes the
// first letter of that word.

// Hint: Try using slice() and .toUpperCase();

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

function toTitleCase(str){
   //split a sentence into an array of words
   const sentenceArr = str.split(" ");
   // loop through the sentence array and capitalizeWord function on each word
   const capArr =  sentenceArr.map(word => capitalizeWord(word))
   // join a sentence array into a string
   return capArr. join(" ");
}


//REPEATED SOLVING PROBLEMS
// function capLetter(word){
//     return word[0].toUpperCase() + word.slice(1);
// }

// function toTitleCase(str){
//     //I have to create an array for each word individually
//     const sentenceArr = str.split(" ");
//     //I have to loop through each word in the array and apply capLetter function to each word
//     const capArr = sentenceArr.map(word => capLetter(word))
//     return capArr.join(" ");
// }


console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("Pumpkin pranced purposefully across the pond."))


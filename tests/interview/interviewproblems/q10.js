// We come in peace!
// We've received whata(we assume) is a message of peace and brotherhood 
// from an allien planet. They almost got it right, but the messages are backwards.
// Write functions to reverse the backward messages so we can read what they have to say

// HINTS 
// You can use reuse your reverseString() function, use string methods, or 
// reverse the strings manually. 

// Plan to solve the problem!
// 1. If title = eltit;


function reverseString(title){
    //create a new array and split the input into characters 
    //reverse the characters in the new input
    // join them into one word
    const reversedTitle = title.reverse();
    return reversedTitle.join(" ");   
}

// function reverseStringInArray(){

// }



console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));
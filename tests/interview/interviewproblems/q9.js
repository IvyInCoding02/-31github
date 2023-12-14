//Anagrams
// Anagrams are group of words that can be spelled with same the letters.
// For example, the word "pea" can rearranged as "ape", and the letters in 
// the "allergy" can be rearraanged to spell "gallery".

// Write a function to check if two strings of lowercase letters are anagrams.
// Return TRUE if the word is an anagram. Return FALSE if it isn't.

// Example input: "allergy", "gallery";
// Example output: TRUE;

// Example input: "rainbow", "crossbow";
// Example output: FALSE;

// HINTS
// If two words are anagrams, their length will be exactly the same.
// Sort both strings so that they will have the alphabetical 
// order(there is a built in method for thid). Are they equal when sorted?
// Then you have an anagram!

//My Solution - it's not accurate because sometimes words might have the same length
// but not contain the anagram letters.

// function isAnagram(str1, str2){
// if(str1.length === str2.length){
//     return true;
// }else{
//     return false;
// }
// }

function isAnagram(str1, str2){
    // if the words dont's have the same length their NOT ANAGRAM!
    if(str1.length !== str2.length) return false;
    // to check not only the length but also content, I have to split
    //the word into characters, sort them in alphabetical order and join them 
    //back into a new string. 
    const newStr1 = str1.split("").sort().join(" ");
    //repeat with str2
    const newStr2 = str2.split("").sort().join(" ");
    //Are the words equal? TRUE or FALSE?
    return newStr1 === newStr2;  
}


console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("rainbow", "crossbow"));
console.log(isAnagram("pea", "ape"));


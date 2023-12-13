

// Emojify!
// Popular services like Slack and GitHub allow for emoji shortcuts,
// meaning they will detect when a word in a sentence begins and ends
// with a colon (:) and automatically replaces that word with an emoji. 

// These shortcodes allow users to add an emoji to their messages by typing a code 
// rather than searching for a word from the list.

// For example typing :smile: will replace the text with 

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

// Write a function that checks if a lowercase word starts and ends
// with a colon. If it does, remove the word and look up the word in
// the emoji objct. If the word is in the emoji's object, return the 
// corresponding emoji.
// If it isn't return the original word.

// Example input: ":party:";
// Example output: "🎉";

// Example input: ":flower:";
// Example output: "flower";

// Example input: "elephant";
// Example output: "elephant";

// HINTS
// 1. To check for colons in a word, use startsWith() and endsWith();
// 2. Use slice() to trim the colons from the word so you can use it 
// to look up emojis in emoji's object.
// 3. To check each word in a phrase for emoji short codes, 
// split() the phrase into an array  and loop through it. 

function emojifyWord(word){
    //starts and ends wit colon?
       //no:  return word
       if(!word.startsWith(":") &&  !word.endsWith(":")){
        return word;
       }
       //yes: remove colons 
       const slice = word.slice(1, -1);
       //exist in emoji object? 
       if(emojis[slice]){
        //yes: return emoji
        return emojis[slice]
       }else{
        return slice;
       }    
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    const newPhrase = phrase.split(" ").map(phrase => emojifyWord(phrase));
     return newPhrase.join(" ");
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
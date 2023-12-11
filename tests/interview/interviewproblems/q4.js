// Whispering function 
// Writte a functiion 'whisper' that takes in a sentence 
// and returns a new sentence in all lowercase letters with "shh ..." at the beginning.

// The function should also remove an exclamation mark(!) at the end if there is one.

// Example
// input: "The KITTENS are SLEEPING!"
// output: "shh... the kittens are sleeping"

// Clue: endsWith and slice

function whisper(str) {
    if(str.endsWith("!")){
        return "shh..."+ str.slice(0, -1).toLowerCase();
    }
        return "shh..." + str.toLowerCase();

}

console.log(whisper("PLEASE STOP SHOUTING"));
console.log(whisper("MA'AM this is Wendy's!"))


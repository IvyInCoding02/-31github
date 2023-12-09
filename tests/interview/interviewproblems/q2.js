// Write a function that accepts a String as an argument

// The string is supposed to be an HTML, but all the closing div elements 
// are missing their closing tags(they have the < and >(I belive it should be <div>))

// The functions job is to find and close all the divs in the provided HTML String 

//Possible Cases
// "<div><p>Here is the <div> tag </p>"
// "<div><div><div> => <div></div><div>"
// "<div><div><p>Hello</p><div><div>"
// => <div></div><p>Hello</p><div></div>

//Solution 
// every second div needs to be closed <div> => </div>

const closeSecondDivs = (string) => {
    let divCounter = 0;
    let unknownFour = "";
    let fixedHTML = "";
    for( i = 0; i < string.length; i++){
        if(string[i] === "<"){
            for( let j = 1; j < 5; j++){
                unknownFour += string[i + j]
            }
        }
        if(unknownFour === "div>"){
            divCounter++;
        }
        if(divCounter % 2 === 0){
            fixedHTML += string[i] + "/";
        }else{
            fixedHTML += string[i];
            unknownFour = "";
        }
    }
    return fixedHTML;
}

console.log(closeSecondDivs("<div><p>Here is the <div> tag </p>"))
console.log(closeSecondDivs("<div><div><div>"))
console.log(closeSecondDivs( "<div><div><p>Hello</p><div><div>"))
console.log(closeSecondDivs( "<div><p>Here is the <div> tag</p>"))
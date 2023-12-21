/* Chef Mario's Recipe Book
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee in his keyboard!Now all his recepies have 
repeat all the ingredients. 

Help save Chef Mario's cookbook by writing a function that takes in an array and 
returns a new array with all the duplicates removed.

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]
//MY FIRST ATTEMPT TO SOLVE ON MY OWN
// function removeDupesFromArray(arr){
//     //create a new array that will take in items with duplicates removed
//     let dupsRemoved = [];
//     //check if the item is already in the array
//     if(dupsRemoved) 
//     //if yes - do not do any change 
//     //if no = add the item into the new array 
//     // and lastly do not forget to return the new array
// }

function removeDupesFromArray(arr){
//create a new array with unique items 
let uniqueItems = [];
//loop through each item in the arr
arr.forEach(item => {
//check if the uniqueItems arr includes the item and add if it does not
if(!uniqueItems.includes(item)){
    uniqueItems.push(item)
}
//if it does, do not do anything
})

//return the new array 
return uniqueItems;
}

console.log(removeDupesFromArray(eggScrambleRecipe));
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

//SOLUTION TYPE 1 - THIS METHOD WORKS FOR  SMALL DATA BUT CAN SLOW DOWN 
//THE WORK IF WE WILL HAVE GIGANTIC DATA WITH OVER 1000 ITEMS  BECAUSE OF THE 
//INCLUDES METHOD THAT WILL HAVE TO GO THROUGH EACH ITEM AND CHECK IF THE ARRAY 
//INCLUDES THE ITEM OR NOT. THE METHOD USES NESTED ARRAY.

// function removeDupesFromArray(arr){
// //create a new array with unique items 
// let uniqueItems = [];
// //loop through each item in the arr
// arr.forEach(item => {
// //check if the uniqueItems arr includes the item and add if it does not
// if(!uniqueItems.includes(item)){
//     uniqueItems.push(item)
// }
// //if it does, do not do anything
// })

// //return the new array 
// return uniqueItems;
// }


//REPEAT SOLVING THE PROBLEM ON MY OWN DAY 2
// function removeDupesFromArray(arr){
//  let uniqueItems = [];
//  arr.forEach(item => {
//     if(!uniqueItems.includes(item)){
//         uniqueItems.push(item)
//     }
//  })
//  return uniqueItems;
// }

// SOLUTION TYPE 2 - THIS METHOD IS MORE EFFECTIVE TO USE BECAUSE IT WILL NOT LOOP 
//THROUGH EACH NESTED ARRAY BUT WILL USE LOOK UP TABLE TO CHECK IF THE ITEM IS THERE OR NOT
// AND IF IT IS NOT THERE, IT WILL ADD THE ITEM INTO THE NEW CREATED OBJ

// function removeDupesFromArray(arr){
// //     //create a new object to keep track of duplicates
// //     //use filter to loop through each item in the array 
// //     //for each item in arr
// //     // look up each item in the look up table
// //     //if the item does NOT exist in the look up table add it and return true
// //     //return true 

// // let trackDupes = {};
// // return arr.filter(item => {
// //     if(!trackDupes[item]){
// //         trackDupes[item] = true;
// //         return true;
// //     }
// //     return false;
// // })
//  }


//REPEAT SOLVING THE PROBLEM ON MY OWN DAY 2
// function removeDupesFromArray(arr){
//     let dupsRemoved = {};
//     return arr.filter(item => {
//         if(!dupsRemoved[item]){
//             dupsRemoved[item] = true;
//             return true;
//         }
//         return false;
//     })
// }

// SOLUTION TYPE 3 - THIS IS ANOTHER BUILD IN METHOD SET() THAT CAN REMOVE 
//DUPLICATE ITEMS AND RETURN [...new] NEW ARRAY WITH UPDATED ITEMS
function removeDupesFromArray(arr){
    return [...new Set(arr)]
}


//REPEAT SOLVING THE PROBLEM ON MY OWN DAY 2
// function removeDupsFromArray(arr){
//     return [...new Set(arr)]
// }

console.log(removeDupesFromArray(eggScrambleRecipe));
/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

//SOLUTION TYPE 1
const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }

//SOLUTION TYPE 2 - build in forEach method 
// function sumArray(arr){
//     let sum = 0;;
//    arr.forEach(item => sum += item);
//    return sum;
// }

//SOLUTION METHOD 3 - REDUCE method which takes in 2 argement with the intial arguement 
//having a number to start.
function sumArray(arr){
    return arr.reduce((sum, item) => sum + item, 0);
}
console.log(sumArray(studentCount));
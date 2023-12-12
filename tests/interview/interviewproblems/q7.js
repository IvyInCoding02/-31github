// Totally not another FizzBuzz

// Scrimba CEO Per Borgen wants you write a program to grant speical bonuses
// to all his employees based on their ID numbers! 

// Scrimba has 100 employees and thier employee ID number range from 1-100.
// If the employee's ID number is 

// 1. Divisible by 3 - Vacation!
// 2. Divisble by 5 - $100,000!
// 3. Divisible by 3 and 5 - JACKPOT! 1 Million and Yacht
// 4. Not divisible by 3 or 5 - :(

// Write a program to loop through all the ID numbers and print their prize.
// Your functions output should look something like this: 

// 1 - :(
// 2 - :(
// 3 - Vacation!
// 4 - :(
// 5 - $100,000

function awardBonuses() {
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} - JACKPOT!1 Million and a yacht`);
    } else if(i % 3 === 0) {
      console.log(`${i} - Vacation!`);
    } else if(i % 5 === 0) {
      console.log(`${i} -$100,000!`);
    } else {
      console.log(":(");
    }
  }
}
awardBonuses();

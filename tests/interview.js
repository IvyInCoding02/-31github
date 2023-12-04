// 
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
// 
sessionStorage.setItem('username', 'John');
console.log(sessionStorage.getItem('username')); // выводит "John
// 
localStorage.setItem('username', 'John');
console.log(localStorage.getItem('username')); // выводит "John"

let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
let output = [...new Set(arr)];
console.log(output); //[1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
let result = arr.filter((item, index) => {
  return arr.indexOf(item) == index;
});
console.log(result); //[1, 2, 3, 4, 5]


// let string = "madam";
// string = string.toLowerCase();
// let reversedString = string.split("").reverse().join("");
// console.log(reversedString); 
// if (string === reversedString) {
//   console.log(`${string} is palindrome`);
// } else {
//   console.log(`${string} is NOT palindrome`);
// }


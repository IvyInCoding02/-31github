// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
      name: 'Alex',
      city: 'Moscow',
    },
    {
      name: 'Ivan',
      city: 'Moscow',
    },
    {
      name: 'Joe',
      city: 'New York'
    },
    {
      name: 'Johan',
      city: 'Berlin'
    },
  ]
  
  const groupByCity = (array) => {
    const result = {}
  
    for (const item of array) {
      const { city, name } = item
  
      if (!result[city]) {
        result[city] = name
      } else if(Array.isArray(result[city])) {
        result[city].push(name)
      } else {
        result[city] = [result[city], name]
      }
    }
  
    return result
  }
  
  console.log(groupByCity(people))
  
  
  
  // Данные на выход
  /*
  {
    'Moscow': [ 'Alex', 'Ivan' ],
    'New York': 'Joe',
    'Berlin': 'Johan'
  }
  */

  

  // 2. Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.

  Number.prototype.plus = function (value) {
    return this + value;
  };

  Number.prototype.minus = function (value) {
    return this - value;
  };

  
// Число два будет доступно через this в функции plus. Из нее мы возвращаем результат сложения числа, на которое указывает this и числа, 
// переданного в качестве аргумента. Аналогично для minus.

// 
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
// 
sessionStorage.setItem('username', 'John');
console.log(sessionStorage.getItem('username')); // выводит "John
// 
localStorage.setItem('username', 'John');
console.log(localStorage.getItem('username')); // выводит "John"

let array = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
let output = [...new Set(arr)];
console.log(output); //[1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
let result = arr.filter((item, index) => {
  return arr.indexOf(item) == index;
});
console.log(result); //[1, 2, 3, 4, 5]


let string = "madam";
string = string.toLowerCase();
let reversedString = string.split("").reverse().join("");
console.log(reversedString); 
if (string === reversedString) {
  console.log(`${string} is palindrome`);
} else {
  console.log(`${string} is NOT palindrome`);
}

//Write a function that accepts a string as an argument
//The function should capitalize ONLY every other letter in the string
//The function should then return converted String

// Solution:
// Clarifying qustions:
// 1. " " => " " (if it is empty string, then it should return an empty string)
// 2. letter === Character
// 3. Starting caps at letter 0

// Example: 
// "hello" => "HeLlO";
// "Yo eli" => "Yo eLi";
// "Hello????" => "HeLlO????"
// 'HELLO' => "HeLlO"

const capLetters= (string) =>{
  //loop through string
  let capString = "";
  for(i = 0; string.length; i++){
     //change the even indices to capital letters
  if(i % 2 ===0){
    capString = capString + string[i].toUpperCase(); //H
    //capString += string[i].toUpperCase();
  }else {
    capString += string[i].toLowerCase();
  }
  }
  return capString;
}

console.log("hello");
console.log("yo eli");
console.log("hello????");
console.log("Hello");

// 
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
// 
sessionStorage.setItem('username', 'John');
console.log(sessionStorage.getItem('username')); // выводит "John
// 
localStorage.setItem('username', 'John');
console.log(localStorage.getItem('username')); // выводит "John"
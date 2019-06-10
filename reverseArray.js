const readline = require('readline-sync');

let num = readline.question("What is your name?");

console.log("Hi " + num + ", nice to meet you.");

var arr = [];
var arr2 = [];

num = readline.question("Enter a number to add to the array, enter a non number to stop: ");
arr.push(num);
while (!isNaN(num)) {
    num = readline.question("Enter a number to add to the array, enter a non number to stop: ");
    if (!isNaN(num) && num.length > 0) {
        arr.push(num);
    }
}

console.log(arr);

for (var i = arr.length - 1; i > -1; i--) {
    arr2.push(arr[i]);
}

console.log(arr2);
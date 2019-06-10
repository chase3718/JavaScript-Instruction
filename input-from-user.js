// function input(prompt) {
//     const readline = require('readline');

//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question(prompt, (value) => {
//         let color = value
//         console.log(`You entered ${color}`);
//         rl.close();
//         return color;
//     });

// }

// console.log(input("Enter a color: "));


const readline = require('readline-sync');

let name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");
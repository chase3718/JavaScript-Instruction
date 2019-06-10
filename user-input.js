const readline = require('readline-sync');

let name = "Chase";

while (name == "Chase") {
    name = readline.question("What is your name?");
}

console.log("Hi " + name + ", nice to meet you.");

let email = readline.questionEMail("Enter an email: ");

console.log(email);

let password = readline.questionNewPassword("Password: ");

console.log(password);
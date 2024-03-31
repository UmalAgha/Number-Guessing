#! /usr/bin/env node
import inquirer from "inquirer";
const numberGuess = await inquirer.prompt([
    {
        message: "Please guess a number between 1-10",
        type: "number",
        name: "userGuessedNumber"
    }
]);
let randomNum = Math.floor(Math.random() * 10 + 1);
console.log("Number which was guessed by computer was", randomNum);
if (numberGuess.userGuessedNumber === randomNum) {
    console.log("Congratulations, you guess a right");
}
else {
    console.log("You guess wrong number");
}

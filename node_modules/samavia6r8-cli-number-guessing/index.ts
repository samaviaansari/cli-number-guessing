#! /usr/bin/env node 


import inquirer from "inquirer";


//1)computer will generate a random number

//2)user input for guessing number

//3)compare user input with computer generated mumber and show result


const randomNumber = Math.floor(Math.random()*6 + 1);

console.log(randomNumber);

const answers = await inquirer.prompt([

{
    name: "userGuessedNumber",
    type: "number",
    message: "please Guess a Number 1-10: ",

},
]);

if(answers.userGuessedNumber === randomNumber) {
    console.log("coungratulations! you guessed right number.");
    
} else {
    console.log ("You guessed wrong number");
}
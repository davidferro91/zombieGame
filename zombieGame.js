// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================
var inquirer = require("inquirer");

var humanHealth = Math.floor(Math.random() * 50) + 1;
var zombieHealth = Math.floor(Math.random() * 25) + 1;

function zombieAttack (num) {
    var zombieNum = Math.floor(Math.random() * 5) + 1;
    console.log("The zombie rolled a " + zombieNum + ".");
    if (num == zombieNum) {
        var zombieDam = Math.floor(Math.random() * 5) + 1;
        console.log("You hit the zombie for " + zombieDam + " damage!  Keep going!");
        zombieHealth = zombieHealth - zombieDam;
        console.log("You have " + humanHealth + " health left.  The zombie has " + zombieHealth + " health left.");
        console.log("");
        console.log("=========================================================");
        console.log("");
    } else {
        var humDam = Math.floor(Math.random() * 5) + 1;
        console.log("OH NO!!!! The zombie bitch-slapped you for " + humDam + " damage!");
        humanHealth = humanHealth - humDam;
        console.log("You have " + humanHealth + " health left.  The zombie has " + zombieHealth + " health left.");
        console.log("");
        console.log("=========================================================");
        console.log("");
    }
}

function gameFunction() {
     
    if (humanHealth > 0 && zombieHealth > 0) {
        inquirer.prompt([
        {
            type: "input",
            message: "Try to stay alive!  Guess a number between one and five! (It rhymes!) [1-5]",
            name: "guess"
        }
        ]).then(function(input) {
        var number = parseInt(input.guess);
        zombieAttack(number);
        gameFunction();
        });
        
    } else if (humanHealth < 1) {
        console.log("The zombie killed you!  GAME OVER");
    } else if (zombieHealth < 1) {
        console.log("You killed the zombie!  You survived another day!");
    }
}

gameFunction();
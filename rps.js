const array = ["rock" , "paper" , "scissors"];

function getComputerChoice() {

const randomIndex = Math.floor(Math.random() * array.length);

const item = array[randomIndex];

return item;
}


const result = getComputerChoice();


function playRound(playerSelectionArray, computerSelection) {

    if (playerSelectionArray === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelectionArray === "rock" && computerSelection === "paper") {
        return "Computer Wins! Paper beats Rock";
    } else if (playerSelectionArray === "paper" && computerSelection === "scissors") {
        return "Computer Wins! Scissors Beats Paper";
    } else if (playerSelectionArray === "scissors" && computerSelection === "rock") {
        return "Computer Wins! Rock beats Scissors";
    } else {
        return "You Win!";
    }
}

function game() {
 
    for (let i = 0; i < 5; i++) {
        let sign = prompt("Rock, Paper or Scissors?")
            if (sign.toLowerCase() === "rock") {
                console.log(playerSelectionArray = "rock");
            } else if (sign.toLowerCase() === "paper") {
                console.log(playerSelectionArray = "paper");
            } else if (sign.toLowerCase() === "scissors"){ 
                console.log(playerSelectionArray = "scissors");
            }
        console.log(playRound(playerSelectionArray , getComputerChoice()))
    }
  
}

let playerSelectionArray = ["rock" , "paper" , "scissors"];

const computerSelection = getComputerChoice();


game();


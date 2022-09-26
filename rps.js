let arr = ["rock" , "paper" , "scissors"]


function getComputerChoice(arr) {

const randomIndex = Math.floor(Math.random() * arr.length);

const item = arr[randomIndex];

return item;
}


console.log(arr.length)

const result = getComputerChoice(arr);

console.log (result);

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer Wins! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer Wins! Scissors Beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer Wins! Rock beats Scissors";
    } else {
        return "You Win!";
    }
}

const playerSelection = "rock";

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
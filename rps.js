let array = ["rock" , "paper" , "scissors"];

function getComputerChoice() {

const randomIndex = Math.floor(Math.random() * array.length);

const item = array[randomIndex];

return item;
}


const result = getComputerChoice();

/* increment (scoreboardA = 0, i < 0, i++) {
    s1++;
 } */

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
let scoreboardA = 0;

let scoreboardB = 0;

const sA = document.querySelector('#scoreboardA');

const sB = document.querySelector('#scoreboardB');

const btnR = document.getElementById('btnR');

const btnS = document.getElementById('btnS');

const btnP = document.getElementById('btnP');

let playerScore = 0;

let computerScore = 0;

function userWin() {
    if (playerScore === 5) {
        alert("Player Wins!")
    } else if (computerScore === 5) {
        alert("Computer Wins!")
    } else {
        return null;
    }
}

btnR.addEventListener('click', () => {

    let result = playRound (`${playerSelectionArray.at(0)}` , getComputerChoice())
    if (result === "You Win!") {
        playerScore++;
        sA.innerText = playerScore;
        
    } else if (result === "It's a Tie!") {
        return null;
    } else {
        computerScore++;
        sB.innerText = computerScore; 
    }
    userWin();
});


btnP.addEventListener('click', () => {

    let result = playRound (`${playerSelectionArray.at(0)}` , getComputerChoice())
    if (result === "You Win!") {
        playerScore++;
        sA.innerText = playerScore;
    } else if (result === "It's a Tie!") {
        return null;
    } else {
        computerScore++;
        sB.innerText = computerScore; 
    }
    userWin();
});

btnS.addEventListener('click', () => {
    
    let result = playRound (`${playerSelectionArray.at(0)}` , getComputerChoice())
    if (result === "You Win!") {
        playerScore++;
        sA.innerText = playerScore;
    } else if (result === "It's a Tie!") {
        return null;
    } else {
        computerScore++;
        sB.innerText = computerScore; 
    }
    userWin();
});





/*function game() {
 
    //for (let i = 0; i < 5; i++) {
        let sign = prompt("Rock, Paper or Scissors?")
            if (sign.toLowerCase() === "rock") {
                console.log(playerSelectionArray = "rock");
            } else if (sign.toLowerCase() === "paper") {
                console.log(playerSelectionArray = "paper");
            } else if (sign.toLowerCase() === "scissors"){ 
                console.log(playerSelectionArray = "scissors");
            }
        console.log(playRound(playerSelectionArray , getComputerChoice()))
    //}
  
}*/

let playerSelectionArray = ["rock" , "paper" , "scissors"];

const computerSelection = getComputerChoice();


//game();


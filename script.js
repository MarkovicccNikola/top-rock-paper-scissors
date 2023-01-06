let value1;
let computerChoice;
let playerChoice;
let round = 0;
let playerScore = 0;
let computerScore = 0;

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    value1 = generateRandomInteger(3);

    switch (value1) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
}

function getPlayerChoice() {
    playerChoice = window.prompt("enter rock, paper or scissors:").toLowerCase();
}

function playRound() {

    getComputerChoice();
    getPlayerChoice();

    if (computerChoice === playerChoice) {
        console.log("draw");
        return (++round);
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        console.log("player wins");
        return (++round, ++playerScore);
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        console.log("player wins");
        return (++round, ++playerScore);
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        console.log("player wins");
        return (++round, ++playerScore);
    } else {
        console.log("computer wins");
        return (++round, ++computerScore);
    }   

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(computerScore, playerScore);
}

playGame(); 
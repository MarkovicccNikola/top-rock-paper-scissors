let value1;
let computerChoice;
let playerChoice;
let playerInput;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let amountOfDraws = 0;
let playerOriginalInput

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
    playerOriginalInput = window.prompt("enter rock, paper or scissors:");
    playerChoice = playerOriginalInput.toLowerCase();
    
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        alert("You entered an unexpected value: " + playerOriginalInput);
        getPlayerChoice();
    }

}

function playRound() {

    getPlayerChoice();
    getComputerChoice();

    if (computerChoice === playerChoice) {
        console.log("draw");
        return (++round, ++amountOfDraws);
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

    console.log("Player Wins:" + playerScore, "Computer Wins:" + computerScore, "Draws:" + amountOfDraws);

    if (computerScore > playerScore) {
        console.log("Computer Won :(");
    } else if (playerScore > computerScore) {
        console.log("Player Won :D");
    } else {
        console.log("Draw :O");
    }
}

playGame();
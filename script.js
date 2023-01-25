let computerChoice;
let playerChoice;
let playerInput;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let amountOfDraws = 0;
let playerOriginalInput;

const resultsSection = document.querySelector("#results-section");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playerChoice = button.value;
    playRound();
  });
});

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
  let value1 = generateRandomInteger(3);

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

function playRound() {
  getComputerChoice();
  const result = document.createElement("p");
  const finalResult = document.createElement("h1");
  for (; computerScore < 5 && playerScore < 5; computerScore++, playerScore++) {
    if (computerChoice === playerChoice) {
      console.log("draw", computerChoice);
      result.textContent = "Draw";
      resultsSection.prepend(result);
      return ++round, ++amountOfDraws;
    } else if (computerChoice === "rock" && playerChoice === "paper") {
      console.log("player wins", computerChoice);
      result.textContent = "Player Wins";
      resultsSection.prepend(result);
      return ++round, ++playerScore;
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
      console.log("player wins", computerChoice);
      result.textContent = "Player Wins";
      resultsSection.prepend(result);
      return ++round, ++playerScore;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
      console.log("player wins", computerChoice);
      result.textContent = "Player Wins";
      resultsSection.prepend(result);
      return ++round, ++playerScore;
    } else {
      console.log("computer wins", computerChoice);
      result.textContent = "Computer Wins";
      resultsSection.prepend(result);
      return ++round, ++computerScore;
    }
  }
  if (computerScore === 5) {
    finalResult.textContent = "COMPUTER WON THIS GAME :(";
    resultsSection.prepend(finalResult);
  } else {
    finalResult.textContent = "PLAYER WON THIS GAME :D";
    resultsSection.prepend(finalResult);
  }
}

function playGame() {
  if (computerScore > playerScore) {
    console.log("Computer Won :(");
  } else if (playerScore > computerScore) {
    console.log("Player Won :D");
  } else {
    console.log("Draw :O");
  }
}

playGame();

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * moves.length);
    console.log(moves[random]);
}

playerSelection = window.prompt('choose: rock, paper, scissors').toLowerCase();

function playRound(playerSelection, computerSelection){

}

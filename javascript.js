const getComputerChoice = function () {
  let choices = ["rock", "paper", "scissors"]; //computer choices
  let randomChoice = Math.floor(Math.random() * choices.length) + 1; //randomly generates a number

  if (randomChoice === 1) {
    return "Rock";
  } else if (randomChoice === 2) {
    return "Scissors";
  } else if (randomChoice === 3) {
    return "Paper";
  }
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock") &
    (computerSelection === "scissors")
  ) {
    return "winner";
  } else if ((playerSelection === "rock") & (computerSelection === "paper")) {
    return "winner";
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "rock")
  ) {
    return "loser";
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "paper")
  ) {
    return "winner";
  } else if (
    (playerSelection === "paper") &
    (computerSelection === "scissors")
  ) {
    return "loser";
  } else if ((playerSelection === "paper") & (computerSelection === "rock")) {
    return "winner";
  }
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

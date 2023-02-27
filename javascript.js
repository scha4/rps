const options = ["rock", "paper", "scissors"];

function computerPicks() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Win";
  } else {
    return "lose";
  }
}

function play(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "it was a tie";
  }
  if (result == "Win") {
    return "you have won";
  }
  if (result == "lose") {
    return "you suck";
  }
}
let playerSelection = "rock";
const computerSelection = computerPicks();
console.log(play(playerSelection, computerSelection));

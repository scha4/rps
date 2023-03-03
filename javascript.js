//UI
let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("compScore");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const results = document.getElementById("result");

//UI

rockDiv.addEventListener("click", function () {
  play("rock");
});
paperDiv.addEventListener("click", function () {
  play("paper");
});
scissorsDiv.addEventListener("click", function () {
  play("scissors");
});

// How the game functions
const options = ["rock", "paper", "scissors"];
const computerSelection = computerPicks();

function computerPicks() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function play(playerSelection) {
  if (playerSelection == computerSelection) {
    results.innerHTML = `Its a tie`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    results.innerHTML = `${playerSelection} beats ${computerSelection}`;
  } else {
    compScore++;
    compScoreSpan.innerHTML = compScore;
    results.innerHTML = `${computerSelection} beats ${playerSelection}`;
  }
}

// function play(playerSelection, computerSelection) {
//   const result = checkWinner(playerSelection, computerSelection);

//   if (result == "Tie") {
//     return "it was a tie";
//   }
//   if (result == "Win") {
//     return "you have won";
//   }
//   if (result == "Lose") {
//     return "you suck";
//   }
// }

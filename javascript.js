//UI
let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("compScore");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const results = document.getElementById("result");
const choice123 = document.querySelectorAll(".choices");
const resetBtn = document.querySelector(".resetBtn");

//UI

rockDiv.addEventListener("click", function () {
  play("Rock");
});
paperDiv.addEventListener("click", function () {
  play("Paper");
});
scissorsDiv.addEventListener("click", function () {
  play("Scissors");
});

resetBtn.onclick = reloadPage;
function reloadPage() {
  window.location.reload();
}

// How the game functions
const options = ["Rock", "Paper", "Scissors"];
const computerSelection = computerPicks();

function computerPicks() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
//disable function
function disable() {
  choice123.forEach((elem) => {
    elem.disabled = true;
  });
}

function play(playerSelection) {
  const computerSelection = computerPicks();
  if (playerSelection == computerSelection) {
    results.innerHTML = `Its a tie`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    results.innerHTML = `${playerSelection} beats ${computerSelection}`;
    if (userScore == 5) {
      results.innerHTML = `You win the game!`;
      disable();
      document.getElementById("p").setAttribute("disabled", "disabled");
    }
  } else {
    compScore++;
    compScoreSpan.innerHTML = compScore;
    results.innerHTML = `${computerSelection} beats ${playerSelection}`;
    if (compScore == 5) {
      results.innerHTML = `You lose bitch!`;
      disable();
      document.getElementById("p").setAttribute("disabled", "disabled");
    }
  }
}

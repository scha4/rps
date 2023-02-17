const computerChoices = ["rock", "paper", "scissors"];

const computerPicks = function () {
  // Randomize rock paper and scissors.
  let randomizeChoice = Math.floor(Math.random() * computerChoices.length);
  // randomizeChoice will be one of [0,1,2] representing all possible indices of computerChoices.
  return computerChoices[randomizeChoice];
};
const playRound = function (playerPicks, computerPicks) {
  if (computerPicks == playerPicks) {
    return "Tie";
  }
  if (
    (computerPicks == "paper" && playerPicks == "rock") ||
    (computerPicks == "rock" && playerPicks == "scissors") ||
    (computerPicks == "scissors" && playerPicks == "paper")
  ) {
    return "you lose";
  }
  if (
    (computerPicks == "paper" && playerPicks == "scissors") ||
    (computerPicks == "rock" && playerPicks == "paper") ||
    (computerPicks == "scissors" && playerPicks == "rock")
  ) {
    return "you win";
  }
};

let playerPicks = "rock";

const game = function () {
  for (let i = 0; i < 5; i++) {}
};

const compChoice = computerPicks();
console.log(playRound(playerPicks, compChoice));

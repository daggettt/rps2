//Rock, Paper, Scissors (in the Console)

let playerScore = 0;
let cpuScore = 0;

//1. Computer randomly returns Rock, Paper, or Scissors
function cpuPlay() {
  let randomChoice = Math.floor(Math.random() * 3);
  //console.log(randomChoice);

  if (randomChoice == 0) {
    return "rock";
  } else if (randomChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//2. Takes Player Selection and Computer Selection and returns string w/ results
function playRound(playerSelection, cpuSelection) {

  if (playerSelection == "rock") {
    if (cpuSelection == "paper") {
      cpuScore += 1;
      return `You played Rock. CPU played Paper. You lose! The CPU has ${cpuScore} points.`;
    } else if (cpuSelection == "scissors") {
      playerScore += 1;
      return `You played Rock. CPU played Scissors. You win! You have ${playerScore} points.`;
    } else {
      return `You played Rock. CPU played Rock, too. It's a tie! The score is ${playerScore} : ${cpuScore}.`;
    };

  } else if (playerSelection == "paper") {
    if (cpuSelection == "scissors") {
      cpuScore += 1;
      return `You played Paper. CPU played Scissors. You lose! The CPU has ${cpuScore} points.`;
    } else if (cpuSelection == "rock") {
      playerScore += 1;
      return `You played Paper. CPU played Rock. You win! You have ${playerScore} points.`;
    } else {
      return `You played Paper. CPU played Paper, too. It's a tie! The score is ${playerScore} : ${cpuScore}.`;
    };

  } else if (playerSelection == "scissors") {
    if (cpuSelection == "rock") {
      cpuScore += 1;
      return `You played Scissors. CPU played Rock. You lose! The CPU has ${cpuScore} points.`;
    } else if (cpuSelection == "paper") {
      playerScore += 1;
      return `You played Scissors. CPU played Paper. You win! You have ${playerScore} points.`;
    } else {
      return `You played Scissors. CPU played Scissors, too. It's a tie! The score is ${playerScore} : ${cpuScore}.`;
    };
  };
};

//3. Calls Play Round 5 times, and announces a winner at the end
function game() {

while (playerScore < 5 || cpuScore < 5) {
  let playerSelection = prompt("Please select Rock, Paper, or Scissors");
  playerSelection = playerSelection.toLowerCase();
  
  let cpuSelection = cpuPlay();
  cpuSelection = cpuSelection.toLowerCase();

  
  alert(playRound(playerSelection, cpuSelection), console.log(playerScore + " : " + cpuScore));

  if (playerScore == 5) {
    return alert("Congrats! You won!");
  } else if (cpuScore == 5){
    return alert("Sorry! You lost!");
  };
  
};
}

game();
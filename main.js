//Rock, Paper, Scissors

//1. player selects either rock, paper, or scissors

let playerChoice = "Rock"; 

//2. computer selects either rock, paper, or scissors (randomly selected)
function cpuChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  //console.log(randomChoice);

  if (randomChoice == 0) {
    return "Rock";
  } else if (randomChoice == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//3. console prints "result" - win, lose, or tie

function result(playerChoice) {

  let cpu = cpuChoice();

  if (playerChoice == "Rock") {
    if (cpu == "Paper") {
      console.log("You played Rock. CPU played Paper. You lose!")
    } else if (cpu == "Scissors") {
      console.log("You played Rock. CPU played Scissors. You win!")
    } else {
      console.log("You played Rock. CPU played Rock, too. It's a tie!")
    };

  } else if (playerChoice == "Paper") {
    if (cpu == "Scissors") {
      console.log("You played Paper. CPU played Scissors. You lose!")
    } else if (cpu == "Rock") {
      console.log("You played Paper. CPU played Rock. You win!")
    } else {
      console.log("You played Paper. CPU played Paper, too. It's a tie!")
    };

  } else if (playerChoice == "Scissors") {
    if (cpu == "Rock") {
      console.log("You played Scissors. CPU played Rock. You lose!")
    } else if (cpu == "Paper") {
      console.log("You played Scissors. CPU played Paper. You win!")
    } else {
      console.log("You played Scissors. CPU played Scissors, too. It's a tie!")
    };
  };
};

result("Scissors");

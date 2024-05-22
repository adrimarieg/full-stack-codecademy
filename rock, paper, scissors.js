console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid Entry: You must enter rock, paper, or scissors.");
    return;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie. No winners.";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins";
    } else if (computerChoice === "scissors") {
      return "User wins.";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "User wins.";
    } else if (computerChoice === "scissors") {
      return "Computer wins.";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins.";
    } else if (computerChoice === "paper") {
      return "User wins.";
    }
  } else {
    return "Invalid entry. Try again.";
  }
}

function playGame() {
  var userChoice = getUserChoice("rock");
  var computerChoice = getComputerChoice();
  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

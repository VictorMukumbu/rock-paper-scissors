console.log("Let's go!!!");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
};

const playRound = (humanChoice, computerChoice) => {
    console.log(`Your choice: ${humanChoice}, Computer choice: ${computerChoice}`);

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost! Paper beats rock.");
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You won! Paper beats rock.");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lost! Scissors beats paper.");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You won! Scissors beats paper.");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lost! Rock beats scissors.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You won! Rock beats scissors.");
        humanScore++;
    } else {
        console.log("It's a tie!");
    }

    // Update score display
    console.log(`Your score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
    scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
};

const announceWinner = () => {
    let winnerMessage = "";
    if (humanScore > computerScore) {
        winnerMessage = "Congratulations! You win the game!";
    } else if (computerScore > humanScore) {
        winnerMessage = "Sorry, the computer wins the game.";
    } else {
        winnerMessage = "It's a tie game!";
    }

    // Display winner message on the page
    winnerMessageDiv.textContent = winnerMessage;

    // Reset scores after showing the winner message
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
        scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
        winnerMessageDiv.textContent = ""; // Clear winner message after reset
    }, 3000);  // Wait 3 seconds before resetting the game for a new round
};

// Create buttons and display elements
let rockBtn = document.createElement("button");
let paperBtn = document.createElement("button");
let scissorsBtn = document.createElement("button");

const choiceDiv = document.querySelector("#choiceDiv");
rockBtn.id = "rockBtn";
paperBtn.id = "paperBtn";
scissorsBtn.id = "scissorsBtn";

let headP = document.createElement("p");
let scoreDisplay = document.createElement("p");
let winnerMessageDiv = document.createElement("p"); // For displaying winner message

winnerMessageDiv.classList.add("winnerMsg")
scoreDisplay.classList.add("scoreDsp")

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
headP.textContent = "Welcome to the arena! Choose Rock, Paper, or Scissors using the buttons and wait for results.";
scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

// Append elements to choiceDiv
choiceDiv.appendChild(headP);
choiceDiv.appendChild(scoreDisplay);
choiceDiv.appendChild(winnerMessageDiv);  // Append winner message div
choiceDiv.appendChild(rockBtn);
choiceDiv.appendChild(paperBtn);
choiceDiv.appendChild(scissorsBtn);

// Event delegation for button clicks
choiceDiv.addEventListener('click', (event) => {
    let target = event.target;

    // Check if a button was clicked
    if (target.tagName.toLowerCase() === 'button') {
        const humanSelection = target.textContent.toLowerCase();  // Get the choice from the button text
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0){
        return "rock";
    }
    else if (choice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const display = document.getElementById("display");
const result = document.createElement("div");
result.classList.add("result");
document.body.appendChild(result);

function playRound(humanChoice, computerChoice){
    if (humanChoice == 'rock' && computerChoice == 'paper'){
        result.textContent = "You lose! Paper beats rock";
        computerScore += 1;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        result.textContent = "You win! Rock beats scissors";
        humanScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        result.textContent = "You win! Paper beats rock";
        humanScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors'){
        result.textContent = "You lose! Scissors beat paper";
        computerScore += 1;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock'){
        result.textContent = "You lose! rock beats scissors";
        computerScore += 1;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        result.textContent = "You win! Scissors beat paper";
        humanScore += 1;
    }
    else
    {
        result.textContent = "It's a tie!"
    }
}

function checkWinner(humanScore, computerScore){
    if (humanScore > computerScore){
        console.log("You win the game!");
    }
    else if (humanScore < computerScore){
        console.log("You lose the game :(");
    }
    else{
        console.log("It's a tie!");
    }
};

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    let choice = playRound("rock", getComputerChoice());
    display.textContent = "rock";
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    let choice = playRound("paper", getComputerChoice())
    display.textContent = "paper";
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    let choice = playRound("scissors", getComputerChoice());
    display.textContent = "scissors";
});
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

let humanScore = 0;
let computerScore = 0;

const display = document.getElementById("display");

//div for displaying humanChoice and computerChoice
const choices = document.createElement("div");
choices.classList.add("choices");
document.body.appendChild(choices);

const result = document.createElement("div");
result.classList.add("result");
document.body.appendChild(result);

function playRound(humanChoice, computerChoice){
    if ((humanChoice == 'rock' && computerChoice == 'paper')||
        (humanChoice == 'paper' && computerChoice == 'scissors')||
        (humanChoice == 'scissors' && computerChoice == 'rock')){
            choices.textContent = `Your choice: ${humanChoice} | Computer's choice: ${computerChoice}`;
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors')||
            (humanChoice == 'paper' && computerChoice == 'rock')||
            (humanChoice == 'scissors' && computerChoice == 'paper')){
                choices.textContent = `Your choice: ${humanChoice} | Computer's choice: ${computerChoice}`;
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore += 1;
    }
    else{
        choices.textContent = `Your choice: ${humanChoice} | Computer's choice: ${computerChoice}`;
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

//Buttons
const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
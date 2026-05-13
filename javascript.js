function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

let humanScore = 0;
let computerScore = 0;

//div for displaying humanChoice and computerChoice
const choices = document.createElement("div");
choices.classList.add("choices");
document.body.appendChild(choices);

//div for displaying the score each round
const score = document.createElement("div");
score.classList.add("score");
document.body.appendChild(score);

//div for displaying who won the round
const result = document.createElement("div");
result.classList.add("result");
document.body.appendChild(result);

//button to restart the game
const playAgain = document.querySelector("#playAgain");
playAgain.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    score.textContent = `${humanScore} X ${computerScore}`;
    choices.textContent = ``;
    result.textContent = ``;

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});

function playRound(humanChoice, computerChoice){
    if ((humanChoice == 'rock' && computerChoice == 'paper')||
        (humanChoice == 'paper' && computerChoice == 'scissors')||
        (humanChoice == 'scissors' && computerChoice == 'rock')){
            choices.textContent = `Your choice: ${humanChoice} | Computer's choice: ${computerChoice}`;
            result.textContent = `You lose this round :( ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors')||
            (humanChoice == 'paper' && computerChoice == 'rock')||
            (humanChoice == 'scissors' && computerChoice == 'paper')){
                choices.textContent = `Your choice: ${humanChoice} | Computer's choice: ${computerChoice}`;
                result.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
                humanScore += 1;
    }
    else{
        choices.textContent = `Your choice: ${humanChoice} | Computer's choice: ${computerChoice}`;
        result.textContent = "It's a tie!"
    }

    score.textContent = `${humanScore} X ${computerScore}`;

    checkWinner(humanScore, computerScore);
}

function checkWinner(humanScore, computerScore){
    if (humanScore == 5){
        result.textContent = `You won the game! \nFinal score: ${humanScore} X ${computerScore}`;

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else if (computerScore == 5){
        result.textContent = `You lost the game:( \nFinal score: ${humanScore} X ${computerScore}`;

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
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
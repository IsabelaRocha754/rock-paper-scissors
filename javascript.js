function getComputerChoice(max){
    let choice = Math.floor(Math.random() * max);

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

function getHumanChoice(){
    let string = prompt("Play: ");
    return string;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("You lose! Paper beats rock")
        computerScore += 1;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log("You win! Rock beats scissors")
        humanScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("You win! Paper beats rock")
        humanScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log("You lose! Scissors beat paper")
        computerScore += 1;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log("You lose! rock beats scissors");
        computerScore += 1;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log("You win! Scissors beat paper");
        humanScore += 1;
    }
    else
    {
        console.log("It's a tie!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);
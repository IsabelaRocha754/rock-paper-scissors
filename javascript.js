function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

console.log(getComputerChoice(3));

function getHumanChoice(){
    let string = prompt("Play: ");
    return string;
}

console.log(getHumanChoice());
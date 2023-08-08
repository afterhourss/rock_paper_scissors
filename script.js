//random computer choice
function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice === 0){
        return "rock";
    } else if (randomChoice === 1){
        return "paper";
    } else if (randomChoice === 2){
        return "scissors";
    }
}

//a game itself
function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    
    if (playerChoice === computerChoice){
        return `draw\n your choice : ${playerChoice}\n computer choice : ${computerChoice}`;
    }else if ( (playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper") ){
            return `YOU WIN!\n your choice : ${playerChoice}\n beats \ncomputer choice : ${computerChoice}`;
    } else {    
        return `YOU LOSE!\n your choice : ${playerChoice}\n beats computer choice : ${computerChoice}`;
    }
}


const playerSelection = prompt("Choose rock, paper, or scissors");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

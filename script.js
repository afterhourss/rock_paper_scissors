//DOM
const matchResult = document.querySelectorAll('div');
const displayScore = document.querySelectorAll('p');


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

//function to play single game
let playerScore = 0;    
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    
    if (playerChoice === computerChoice){
        matchResult[3].textContent = `DRAW!\n your choice : ${playerChoice}\n computer choice : ${computerChoice}`;
    }else if ( (playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper") ){
        playerScore++;
        displayScore[0].textContent = playerScore;
        matchResult[3].textContent = `YOU WIN!\n your choice : ${playerChoice}\n beats \ncomputer choice : ${computerChoice}`;
    } else {
        computerScore++;
        displayScore[1].textContent = computerScore;
        matchResult[3].textContent = `YOU LOSE!\n your choice : ${playerChoice}\n beats computer choice : ${computerChoice}`;
    }

    if(playerScore == 5 || computerScore == 5){
        matchResult[3].textContent = "YOU WIN";
        return restartGame();
    } else if (computerScore == 5){
        matchResult[3].textContent = "YOU LOSE BITCH";
        return restartGame();
    }
}


//restart function when one of the score are 5
function restartGame(){
    playerScore = 0;
    computerScore = 0;
    displayScore[0].textContent = '0';
    displayScore[1].textContent = '0';
}


//DOM add event listener
const btn = document.querySelectorAll('button');
btn[0].addEventListener("click", () => {
    return (playRound("rock", getComputerChoice() ));
});
btn[1].addEventListener("click", () => {
    return (playRound("paper", getComputerChoice() ));
});
btn[2].addEventListener("click", () => {
    return (playRound("scissors", getComputerChoice() ));
});

//DOM
const matchResult = document.querySelector('.final-result');
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
        matchResult.innerHTML = `<h3>DRAW!</h3>` +
        `<p>your choice : ${playerChoice} || computer choice : ${computerChoice}</p>`;
    }else if ( (playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper") ){
        playerScore++;
        displayScore[0].textContent = playerScore;
        matchResult.innerHTML = `<h3>YOU WIN!</h3>` +
        `<p>your choice : ${playerChoice}\n beats \ncomputer choice : ${computerChoice}</p>`;
    } else {
        computerScore++;
        displayScore[1].textContent = computerScore;
        matchResult.innerHTML = `<h3>YOU LOSE!</h3>` +
        `<p>your choice : ${playerChoice}\n beats computer choice : ${computerChoice}</p>`;
    }

    if(playerScore == 5){
        matchResult.innerHTML = "<h1>YOU WIN</h1>";
        return restartGame();
    } else if (computerScore == 5){
        matchResult.innerHTML = "<h1>YOU LOSE BITCH</h1>";
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

function getComputerChoice (){
    let x = Math.random();
    if (x < 0.33) {return "rock";}
    else if (x < 0.66) {return "paper";}
    else {return "scissors"; }
}

function getHumanChoice (){
    return y = prompt("Please choose between 'Rock' 'Paper' 'Scissors' ");
}

function playGame (){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        function playRound (humanChoice,computerChoice) {
            if (humanChoice == computerChoice) { return "Its a tie";}
            else if ( (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice=="paper" && computerChoice=="rock") || (humanChoice=="scissors" && computerChoice=="paper")){humanScore++; return "You win, "+humanChoice+" beats "+computerChoice+".";}
            else {computerScore++; return "You lose, "+computerChoice+" beats "+humanChoice+".";}
        }
        console.log(playRound(getHumanChoice(),getComputerChoice()));
    }
    if (humanScore>computerScore) {console.log("Congratulations!! You win with "+humanScore+"-"+computerScore+"!");}
    else {console.log("Sadly you lost with a score "+humanScore+"-"+computerScore+"...");}
}

playGame();
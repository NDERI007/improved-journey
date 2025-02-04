 
/* eslint-disable @typescript-eslint/no-unused-vars */
const playerDisplay = document.querySelector("#playerDisplay");
const compDisp = document.querySelector("#compDis");
const resultDisplay =document.querySelector("#resultDisplay");
const playerScore = document.querySelector("#HUmanScore");
const OppScore = document.querySelector("#compScore");
   let result;
   let humanSCore = 0;
        let computerScore = 0;
   const options =["rock", "paper", "scissors"];

   function PlayRound(playerselection) {

        const ComputerChoice = options[(Math.floor(Math.random() *3))];

    if (playerselection === ComputerChoice) {
        result = "It's a tie";
    } else {
        switch (playerselection) {
            case "rock":
                result = (ComputerChoice === "scissors") ? "You win" : "You lose";
                break;
            case "paper":
                result = (ComputerChoice === "rock") ? "You win" : "You lose";
                break;
            case "scissors":
                result = (ComputerChoice === "paper") ? "You win" : "You lose";
                break;
            default:
                result = "Invalid choice";
        }
    }
    playerDisplay.textContent = `player: ${playerselection}`;
    compDisp.textContent = `computer: ${ComputerChoice}`;
    resultDisplay.textContent = `${result}`;
    resultDisplay.classList.remove("greentext", "redtext");
    switch (result) {
        case "You win":
            resultDisplay.classList.add("greentext");
            humanSCore++;
            playerScore.textContent = `${humanSCore}`;
            break;
        case "You lose":
            resultDisplay.classList.add("redtext");
            computerScore++;
            OppScore.textContent = `${computerScore}`;
            break;
        default:
            break;
    }
}
        if (humanSCore > computerScore) {
            console.log(`You win the game ${humanSCore}`);
        } else if (computerScore > humanSCore) {
            console.log(`Autobot wins the game ${computerScore}`);
        } else{
            console.log("we have a tie");
        }
        
    
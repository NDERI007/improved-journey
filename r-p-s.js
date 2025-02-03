/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
const playerDisplay = document.querySelector("#playerDisplay");
const compDisp = document.querySelector("#compDis");
const resultDisplay =document.querySelector("#resultDisplay");
   let result;
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
    resultDisplay.textContent = `result: ${result}`;
   }
    function game() {
        let humanSCore = 0;
        let computerScore = 0;
            if (result === "You win") {
                humanSCore++;
            } else if (result === "You lose") {
                computerScore++;
            }
        }
        if (humanSCore > computerScore) {
            console.log(`You win the game ${humanSCore}`);
        } else if (computerScore > humanSCore) {
            console.log(`Autobot wins the game ${computerScore}`);
        } else{
            console.log("we have a tie");
        }
        
    
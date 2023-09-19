// Changeable elements
const currentRound = document.getElementById("round");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const messageDisplay = document.getElementById("message");

// BUTTONS
const buttons = document.querySelectorAll("btn");
const rockbtn = document.getElementById("btn-rock");
const paperbtn = document.getElementById("btn-paper");
const scissorsbtn = document.getElementById("btn-scissors");
// add replay button here

// IMAGES
const playerChoiceImage = document.getElementById("player-choice-image");
const computerChoiceImage = document.getElementById("computer-choice-image");

// const choices = ['rock', 'paper', 'scissors'];
// const choiceImages = {
//     rock: './imgages/rock.png',
//     paper: './imgages/paper.png',
//     scissors: './imgages/scissors.png',
// }

// const enemyChoiceImages = {
//     rock: './imgages/e-rock.png',
//     paper: './imgages/e-paper.png',
//     scissors: './imgages/e-scissors.png',
// }

let playerScore, computerScore, rounds, playing;

function init() {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  playing = true;

  currentRound.textContent = 0;
  playerChoice.textContent = "Player";
  computerChoice.textContent = "Computer";
  messageDisplay.textContent = "Let's play";
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
}

// BUTTON EVENT LISTENERS
rockbtn.addEventListener("click", () => {
    playerChoiceImage.src = "images/rock.png"
    
  });
  
  paperbtn.addEventListener("click", () => {
    playerChoiceImage.src = "images/paper.png"
   
  });
  
  scissorsbtn.addEventListener("click", () => {
    playerChoiceImage.src = "images/scissors.png"
    
  });

init();

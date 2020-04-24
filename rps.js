function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    var computerSelection;
    if (num == 0) {
        computerSelection = 'rock';
    } else if (num == 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt('Do you choose Rock, Paper, or Scissors?').toLowerCase();
    console.log('You chose: ' + playerSelection);
    computerSelection = computerPlay();
    console.log('Computer chose: ' + computerSelection);
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++;
            console.log("You lose this round! Paper beats Rock.");
            return "You lose this round! Paper beats Rock.";
        } else if (computerSelection == 'scissors') {
            playerScore++;
            console.log("You win this round! Rock beats Scissors.");
            return "You win this round! Rock beats Scissors.";
        } else if (computerSelection == 'rock') {
            console.log("This round is a draw! You both chose Rock.");
            return "This round is a draw! You both chose Rock.";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            console.log("This round is a draw! You both chose Paper.");
            return "This round is a draw! You both chose Paper.";
        } else if (computerSelection == 'scissors') {
            computerScore++;
            console.log("You lose this round! Scissors beats Paper.");
            return "You lose this round! Scissors beats Paper.";
        } else if (computerSelection == 'rock') {
            playerScore++;
            console.log("You win this round! Paper beats Rock.");
            return "You win this round! paper beats Rock.";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            playerScore++;
            console.log("You win this round! Scissors beats Paper.");
            return "You win this round! Scissors beats Paper.";
        } else if (computerSelection == 'scissors') {
            console.log("This round is a draw! You both chose Scissors.");
            return "This round is a draw! You both chose Scissors.";
        } else if (computerSelection == 'rock') {
            computerScore++;
            console.log("You lose this round! Rock beats Scissors.");
            return "You lose this round! Rock beats Scissors.";
        }
    }
}

function game() {
    for (var i = 0; i < 5; i++) {
        playRound();
        console.log('Player score: ' + playerScore + '. ' + 'Computer score: ' + computerScore + '.');
    }
    console.log('The final score is: You - ' + playerScore + ', Computer - ' + computerScore + '.');
    if (playerScore > computerScore) {
        console.log("You've won!");
        return "You've won!";
    } else if (computerScore > playerScore) {
        console.log("Sorry, but you've lost.");
        return "Sorry, but you've lost.";
    } else {
        console.log("So close, but it's a tie.")
        return "So close, but it's a tie.";
    }
}

var playerScore = 0;
var computerScore = 0;
game();
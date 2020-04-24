function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    var computerSelection;
    if (num === 0) {
        computerSelection = 'Rock';
    } else if (num === 1) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt('Do you choose Rock, Paper, or Scissors?')
    computerPlay();
    console.log('Computer chooses: ' + computerSelection);
    if (playerSelection === 'Rock' || playerSelection === 'rock' || playerSelection === 'ROCK') {
        if (computerSelection === 'Paper') {
            computerScore++;
            return "You lose this round! Paper beats Rock.";
            console.log("You lose this round! Paper beats Rock.");
        }
        if (computerSelection === 'Scissors') {
            playerScore++;
            return "You win this round! Rock beats Scissors.";
            console.log("You win this round! Rock beats Scissors.");
        }
        if (computerSelection === 'Rock') {
            return "This round is a draw! You both chose Rock.";
            console.log("This round is a draw! You both chose Rock.");
        }
    }
    if (playerSelection === 'Paper' || playerSelection === 'paper' || playerSelection === 'PAPER') {
        if (computerSelection === 'Paper') {
            return "This round is a draw! You both chose Paper.";
            console.log("This round is a draw! You both chose Paper.");
        }
        if (computerSelection === 'Scissors') {
            computerScore++;
            return "You lose this round! Scissors beats Paper.";
            console.log("You lose this round! Scissors beats Paper.");
        }
        if (computerSelection === 'Rock') {
            playerScore++;
            return "You win this round! Paper beats Rock.";
            console.log("You win this round! Paper beats Rock.");
        }
    }
    if (playerSelection === 'Scissors' || playerSelection === 'scissors' || playerSelection === 'SCISSORS') {
        if (computerSelection === 'Paper') {
            playerScore++;
            return "You win this round! Scissors beats Paper.";
            console.log("You win this round! Scissors beats Paper.");
        }
        if (computerSelection === 'Scissors') {
            return "This round is a draw! You both chose Scissors.";
            console.log("This round is a draw! You both chose Scissors.");
        }
        if (computerSelection === 'Rock') {
            computerScore++;
            return "You lose this round! Rock beats Scissors.";
            console.log("You lose this round! Rock beats Scissors.");
        }
    }
}

function game() {
    var playerScore = 0;
    var computerScore = 0;
    for (var i = 0; i < 5; i++) {
        playRound();
    }
    console.log('The final score is: You - ' + playerScore + ', Computer - ' + computerScore + '.');
    if (playerScore > computerScore) {
        return 'You have won!'
        console.log('You have won!')
    } else {
        return 'You have lost.'
        console.log('You have lost.')
    }
}

game();
const playerSelection = 'rock';
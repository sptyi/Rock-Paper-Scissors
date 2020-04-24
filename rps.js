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

function game() {
    for (var i = 0; i < 5; i++) {
        function playRound(playerSelection, computerSelection) {
            var playerScore = 0;
            var computerScore = 0;
            computerPlay();
            console.log('Computer chooses: ' + computerSelection);
            if (playerSelection === 'Rock' | playerSelection === 'rock' | playerSelection === 'ROCK') {
                if (computerSelection === 'Paper') {
                    computerScore++;
                    return "You lose this round! Paper beats Rock.";
                }
                if (computerSelection === 'Scissors') {
                    playerScore++;
                    return "You win this round! Rock beats Scissors.";
                }
                if (computerSelection === 'Rock') {
                    return "This round is a draw! You both chose Rock.";
                }
            }
            if (playerSelection === 'Paper' | playerSelection === 'paper' | playerSelection === 'PAPER') {
                if (computerSelection === 'Paper') {
                    return "This round is a draw! You both chose Paper.";
                }
                if (computerSelection === 'Scissors') {
                    computerScore++;
                    return "You lose this round! Scissors beats Paper.";
                }
                if (computerSelection === 'Rock') {
                    playerScore++;
                    return "You win this round! Paper beats Rock.";
                }
            }
            if (playerSelection === 'Scissors' | playerSelection === 'scissors' | playerSelection === 'SCISSORS') {
                if (computerSelection === 'Paper') {
                    return "You win this round! Scissors beats Paper.";
                    playerScore++;
                }
                if (computerSelection === 'Scissors') {
                    return "This round is a draw! You both chose Scissors.";
                }
                if (computerSelection === 'Rock') {
                    computerScore++;
                    return "You lose this round! Rock beats Scissors.";
                }
            }
        }
    }
    if (playerScore > computerScore) {
        return 'You have won!'
        console.log('You have won!')
    } else {
        return 'You have lost.'
        console.log('You have lost.')
    }
}

game();
console.log(game());
const playerSelection = 'rock';
const computerSelection = computerPlay();
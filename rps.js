const header = document.querySelector('.header');
const weapon = document.querySelector('.weapon');
const outcome = document.querySelector('.outcome');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const rockBtn = document.querySelector('.rockBtn');
let playerScore = 0;
let computerScore = 0;

paperBtn.addEventListener('click', () => {
	playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
	playRound('scissors');
});

rockBtn.addEventListener('click', () => {
	playRound('rock');
});

function computerPlay() {
	let num = Math.floor(Math.random() * 3);
	let computerSelection;
	if (num == 0) {
		computerSelection = 'rock';
	} else if (num == 1) {
		computerSelection = 'paper';
	} else {
		computerSelection = 'scissors';
	}
	return computerSelection;
}

function playerPaper() {
	if (computerSelection == 'paper') {
		outcome.textContent = 'This round is a draw! You both chose Paper.';
		console.log('This round is a draw! You both chose Paper.');
		return 'This round is a draw! You both chose Paper.';
	} else if (computerSelection == 'scissors') {
		computerScore++;
		outcome.textContent = 'You lose this round! Scissors beats Paper.';
		console.log('You lose this round! Scissors beats Paper.');
		return 'You lose this round! Scissors beats Paper.';
	} else if (computerSelection == 'rock') {
		playerScore++;
		outcome.textContent = 'You win this round! paper beats Rock.';
		console.log('You win this round! Paper beats Rock.');
		return 'You win this round! paper beats Rock.';
	}
}

function playerScissors() {
	if (computerSelection == 'paper') {
		playerScore++;
		outcome.textContent = 'You win this round! Scissors beats Paper.';
		console.log('You win this round! Scissors beats Paper.');
		return 'You win this round! Scissors beats Paper.';
	} else if (computerSelection == 'scissors') {
		outcome.textContent = 'This round is a draw! You both chose Scissors.';
		console.log('This round is a draw! You both chose Scissors.');
		return 'This round is a draw! You both chose Scissors.';
	} else if (computerSelection == 'rock') {
		computerScore++;
		outcome.textContent = 'You lose this round! Rock beats Scissors.';
		console.log('You lose this round! Rock beats Scissors.');
		return 'You lose this round! Rock beats Scissors.';
	}
}

function playerRock() {
	if (computerSelection == 'paper') {
		computerScore++;
		outcome.textContent = 'You lose this round! Paper beats Rock.';
		console.log('You lose this round! Paper beats Rock.');
		return 'You lose this round! Paper beats Rock.';
	} else if (computerSelection == 'scissors') {
		playerScore++;
		outcome.textContent = 'You win this round! Rock beats Scissors.';
		console.log('You win this round! Rock beats Scissors.');
		return 'You win this round! Rock beats Scissors.';
	} else if (computerSelection == 'rock') {
		outcome.textContent = 'This round is a draw! You both chose Rock.';
		console.log('This round is a draw! You both chose Rock.');
		return 'This round is a draw! You both chose Rock.';
	}
}

function playRound(playerSelection) {
	console.log('You chose: ' + playerSelection);
	computerSelection = computerPlay();
	outcome.textContent = 'Computer chose: ' + computerSelection;
	console.log('Computer chose: ' + computerSelection);
	if (playerSelection == 'paper') {
		playerPaper();
	} else if (playerSelection == 'scissors') {
		playerScissors();
	} else {
		playerRock();
	}
	score(playerScore, computerScore);
}

function score(playerScore, computerScore) {
	//let playerScore;
	//let computerScore;
	console.log(
		'Player score: ' +
			playerScore +
			'. ' +
			'Computer score: ' +
			computerScore +
			'.'
	);
	let scoreDiv = document.createElement('div');
	scoreDiv.class = 'score';
	scoreDiv.innerHTML =
		'Player score: ' +
		playerScore +
		'. ' +
		'Computer score: ' +
		computerScore +
		'.';
	if (playerScore > computerScore) {
		console.log("You're winning!");
		return "You're winning!!";
	} else if (computerScore > playerScore) {
		console.log("Sorry, but you're losing.");
		return "Sorry, but you're losing.";
	} else {
		console.log("So close, but it's a tie.");
		return "So close, but it's a tie.";
	}
	document.body.appendChild(scoreDiv);
}

const header = document.querySelector('.header');
const weapon = document.querySelector('.weapon');
const choices = document.querySelector('#choices');
const pScoreDiv = document.querySelector('#pScoreDiv');
const pScore = document.querySelector('.pScore');
const pScoreText = document.querySelector('.pScoreText');
const cScoreDiv = document.querySelector('#cScoreDiv');
const cScore = document.querySelector('.cScore');
const cScoreText = document.querySelector('.cScoreText');
const rank = document.querySelector('#rank');
const winner = document.querySelector('#winner');
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const restartBtn = document.querySelector('.restartBtn');
let playerScore = 0;
let computerScore = 0;
let gameOn = false;
hideRestart();

paperBtn.addEventListener('click', () => {
	playRound('paper');
});

paperBtn.addEventListener('mouseover', () => {
	weapon.textContent = 'Paper?';
});

paperBtn.addEventListener('mouseout', () => {
	weapon.textContent = 'Choose your weapon:';
});

scissorsBtn.addEventListener('click', () => {
	playRound('scissors');
});
scissorsBtn.addEventListener('mouseover', () => {
	weapon.textContent = 'Scissors?';
});

scissorsBtn.addEventListener('mouseout', () => {
	weapon.textContent = 'Choose your weapon:';
});

rockBtn.addEventListener('click', () => {
	playRound('rock');
});

rockBtn.addEventListener('mouseover', () => {
	weapon.textContent = 'Rock?';
});

rockBtn.addEventListener('mouseout', () => {
	weapon.textContent = 'Choose your weapon:';
});

restartBtn.addEventListener('click', () => {
	if (gameOn == false) {
		return;
	} else {
		gameOn = false;
		restart();
	}
});

function restart() {
	hideRestart();
	playerScore = 0;
	computerScore = 0;
	pScore.textContent = '';
	cScore.textContent = '';
	pScoreText.textContent = '';
	cScoreText.textContent = '';
	winner.textContent = '';
	choices.textContent = '';
	rank.textContent = 'Play again!';
}

function hideRestart() {
	if (gameOn == false) {
		restartBtn.style.cssText += 'display: none';
	} else {
		restartBtn.style.cssText += 'display: initial';
	}
}

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
		winner.textContent = 'This round is a draw! You both chose paper.';
	} else if (computerSelection == 'scissors') {
		computerScore++;
		winner.textContent = 'You lose this round! Scissors beats paper.';
	} else if (computerSelection == 'rock') {
		playerScore++;
		winner.textContent = 'You win this round! paper beats rock.';
	}
}

function playerScissors() {
	if (computerSelection == 'paper') {
		playerScore++;
		winner.textContent = 'You win this round! Scissors beats paper.';
	} else if (computerSelection == 'scissors') {
		winner.textContent = 'This round is a draw! You both chose scissors.';
	} else if (computerSelection == 'rock') {
		computerScore++;
		winner.textContent = 'You lose this round! Rock beats scissors.';
	}
}

function playerRock() {
	if (computerSelection == 'paper') {
		computerScore++;
		winner.textContent = 'You lose this round! Paper beats rock.';
	} else if (computerSelection == 'scissors') {
		playerScore++;
		winner.textContent = 'You win this round! Rock beats scissors.';
	} else if (computerSelection == 'rock') {
		winner.textContent = 'This round is a draw! You both chose rock.';
	}
}

function playRound(playerSelection) {
	gameOn = true;
	hideRestart();
	computerSelection = computerPlay();
	choices.textContent = 'Computer chose ' + computerSelection + '.';
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
	pScore.textContent = playerScore;
	pScoreText.textContent = 'Your Score:';
	cScore.textContent = computerScore;
	cScoreText.textContent = 'Computer Score:';
	if (playerScore > computerScore) {
		rank.textContent = "You're winning!";
	} else if (computerScore > playerScore) {
		rank.textContent = "Uh-oh, you're losing.";
	} else {
		rank.textContent = "So close, but it's a tie.";
	}
}

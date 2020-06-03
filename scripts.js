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
const popup = document.querySelector('#popup');
const closePopupBtn = document.querySelector('#closePopupBtn');
let playerScore = 0;
let computerScore = 0;
let gameOn = false;
var timeoutClosePopup;
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

closePopupBtn.addEventListener('click', () => {
	closePopup();
});

window.addEventListener('click', outsidePopupClick);

function closePopup() {
	popup.style.display = 'none';
	clearTimeout(timeoutClosePopup);
}

function resetPopup() {
	popup.style.cssText += 'animation-name: popupopen;';
}

function outsidePopupClick(e) {
			if (e.target == popup) {
				closePopup();
			}
		}

function openPopup() {
			popup.style.display = 'block';
			timeoutClosePopup = setTimeout(closePopup, 3000);
		}

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
			introText.style.display = 'initial';
			introText.textContent = 'Play again!';
		}

function hideRestart() {
			if (gameOn == false) {
				restartBtn.style.display = 'none';
			} else {
				restartBtn.style.display = 'initial';
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
				winner.textContent = 'This round is a draw!';
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
				winner.textContent = 'This round is a draw!';
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
				winner.textContent = 'This round is a draw!';
			}
		}

function playRound(playerSelection) {
			gameOn = true;
			hideRestart();
			introText.style.display = 'none';
			computerSelection = computerPlay();
			if (computerSelection == playerSelection) {
				choices.textContent = 'Computer chose ' + computerSelection + ', and so did you.';
			} else {
				choices.textContent = 'Computer chose ' + computerSelection + ', and you chose ' + playerSelection + '.';
			}
			if (playerSelection == 'paper') {
				playerPaper();
			} else if (playerSelection == 'scissors') {
				playerScissors();
			} else {
				playerRock();
			}
			score(playerScore, computerScore);
			openPopup();
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

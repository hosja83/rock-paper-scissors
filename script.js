function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random % 3 == 0) return 'Rock';
    if (random % 2 == 0) return 'Scissor';
    return 'Paper';
}

function createRoundResultContainer () {
    const roundResult = document.createElement('div');
    resultsContainer.insertBefore(roundResult, resultsContainer.firstChild);
    roundResult.style.cssText = 'margin-bottom: 10px;';
    return roundResult;
}

function checkScore() { 
    if (playerScore === 5) {
        createRoundResultContainer().textContent = "Congratulations! You Won the Game!";
        handleGameCompletion();
    }
    if (computerScore === 5) {
        createRoundResultContainer().textContent = "You Lost the Game";
        handleGameCompletion();
    }
}

function updateScore() {
    document.getElementsByClassName("player-score")[0].textContent = `Player Score: ${playerScore}`;
    document.getElementsByClassName("computer-score")[0].textContent = `Computer Score: ${computerScore}`;
}

function playRound(playerSelection) {
    const playerSelectionFormated = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();
    let computerSelection = computerPlay();
    roundNumber++;

    if (playerSelectionFormated == computerSelection) {
        createRoundResultContainer().textContent = `Round ${roundNumber}: Draw! ${playerSelectionFormated} ties with ${computerSelection}`;
    }
    if (playerSelectionFormated == 'Rock' && computerSelection == 'Paper') {
        createRoundResultContainer().textContent = `Round ${roundNumber}: You Lose Paper beats Rock`;
        computerScore++;
    }
    if (playerSelectionFormated == 'Rock' && computerSelection == 'Scissor') {
        createRoundResultContainer().textContent = `Round ${roundNumber}: You Win! Rock beats Scissor`;
        playerScore++;
    }
    if (playerSelectionFormated == 'Paper' && computerSelection == 'Scissor') {
        createRoundResultContainer().textContent = `Round ${roundNumber}: You Lose! Scissor beats Paper`;
        computerScore++;
    }
    if (playerSelectionFormated == 'Paper' && computerSelection == 'Rock') {
        createRoundResultContainer().textContent = `Round ${roundNumber}: You Win! Paper beats Rock`;
        playerScore++;
    }
    if (playerSelectionFormated == 'Scissor' && computerSelection == 'Rock') {
        createRoundResultContainer().textContent = `Round ${roundNumber}: You Lose! Rock beats Scissor`;
        computerScore++;
    }
    if (playerSelectionFormated == 'Scissor' && computerSelection == 'Paper') {
        createRoundResultContainer().textContent = `Round ${roundNumber}: You Win! Scissor beats Paper`;
        playerScore++;
    }

    updateScore();
    checkScore();
}

function initScoreBoard() {
    const scoreboard = document.createElement('div');
    scoreboard.classList.add('scoreboard');

    const playerScoreBoard = document.createElement('div');
    const computerScoreBoard = document.createElement('div');
    computerScoreBoard.classList.add('computer-score');
    playerScoreBoard.classList.add('player-score');

    document.querySelector('body').appendChild(scoreboard);
    scoreboard.appendChild(playerScoreBoard);
    scoreboard.appendChild(computerScoreBoard);

    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
}

function createRPSButtons() {
    const buttonRock = document.createElement('button');
    const buttonPaper = document.createElement('button');
    const buttonScissor = document.createElement('button');
    
    const buttonContainer = document.querySelector('div.rps-buttons');
    
    buttonContainer.appendChild(buttonRock);
    buttonContainer.appendChild(buttonPaper);
    buttonContainer.appendChild(buttonScissor);

    buttonRock.textContent = 'ROCK';
    buttonPaper.textContent = 'PAPER';
    buttonScissor.textContent = 'SCISSOR';   
    
    return Array.from(document.querySelectorAll('div.rps-buttons > button'));
}

function initRPSListener() {
    rpsButtons.forEach(button => {
        let playerPick = button.textContent;
        button.addEventListener('click', () => playRound(playerPick));
    });
}

function styleRPSButtons() {
    rpsButtons.forEach(button => {
        button.style.cssText = 'padding: 16px;';
    });
}

function handleGameCompletion() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;

    rpsButtons.forEach(button => {
        button.disabled = true;
    });
}

function createPlayAgainEventListener() {
    const playAgainButton = document.createElement('button');
    document.querySelector('body').appendChild(playAgainButton);
    playAgainButton.textContent = 'PLAY AGAIN';
    playAgainButton.style.cssText = 'margin-bottom: 32px; padding: 16px;';


    playAgainButton.addEventListener('click', refreshPage);
}

function refreshPage() {
    window.location.reload(true);
}

let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

const rpsButtons = createRPSButtons();
styleRPSButtons();
initScoreBoard();
createPlayAgainEventListener();

const resultsContainer = document.createElement('div');
resultsContainer.classList.add('results');
document.querySelector('body').appendChild(resultsContainer);

initRPSListener();

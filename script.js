function computerPlay() {
    let random = Math.floor(Math.random()*3) + 1;

    if (random % 3 == 0) return 'Rock';
    if (random % 2 == 0) return 'Scissor';
    return 'Paper';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`Draw! ${playerSelection} ties with ${computerSelection}`);
        return 0;
    } 
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log("You Lose Paper beats Rock");
        return 2;
    }
    if (playerSelection == 'Rock' && computerSelection == 'Scissor') {
        console.log("You Win! Rock beats Scissor");
        return 1;
    }
    if (playerSelection == 'Paper' && computerSelection == 'Scissor') {
        console.log("You Lose! Scissor beats Paper");
        return 2;
    }
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    if (playerSelection == 'Scissor' && computerSelection == 'Rock') {
        console.log("You Lose! Rock beats Scissor");
        return 2;
    }
    if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
        console.log("You Win! Scissor beats Paper");
        return 1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        //Get input from user
        const userInput = prompt("Enter Paper, Rock, or Scissor", "");
        const userInputFormated = userInput.slice(0,1).toUpperCase() + userInput.slice(1,userInput.length).toLowerCase();
        
        //Computer generated selection
        const computerInput = computerPlay();
        
        //Return 0 - draw, 1 - win, 2 - lose
        let result = playRound(userInputFormated, computerInput);

        if (result === 1) playerScore++;
        if (result === 2) computerScore++;

        if (playerScore === 3) {
            console.log("Congratulations! You Won the Game!");
            return 1;
        }
        if (computerScore === 3) {
            console.log("You Lost the Game");
            return 2;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You Won the Game!");
        return 1;
    }
    if (playerScore < computerScore) {
        console.log("You Lost the Game");
        return 2;
    }

    console.log("The game has ended in a Draw.");
    return 0;
}
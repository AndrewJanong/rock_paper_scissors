function getComputerChoice() {
    let a = Math.random() * 3;
    switch (true) {
        case a >= 2:
            return 'rock';
            break;
        case a >= 1:
            return 'paper';
            break;
        case a >= 0:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let win_array = [[0, 1, 2],
                     [2, 0, 1],
                     [1, 2, 0]];

    let p, c;
    if (playerSelection === 'rock') {
        p = 0;
    } else if (playerSelection === 'paper') {
        p = 1;
    } else if (playerSelection === 'scissors') {
        p = 2;
    } 

    if (computerSelection === 'rock') {
        c = 0;
    } else if (computerSelection === 'paper') {
        c = 1;
    } else if (computerSelection === 'scissors') {
        c = 2;
    }

    if (win_array[p][c] === 0) {
        return 'It\'s a tie!';
    } else if (win_array[p][c] === 1) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}


function game() {
    let playerChoice;
    let computerChoice;

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice)
        console.log(result);

        if (result.slice(0, 9) === 'You lose!') {
            computerScore++;
        } else if (result.slice(0, 8) === 'You win!') {
            playerScore++;
        }
        
        console.log(`Score: ${playerScore} - ${computerScore}`);
    }
}


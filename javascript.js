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
        return 'tie';
    } else if (win_array[p][c] === 1) {
        return 'lose';
    } else {
        return 'win';
    }
}

/*
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
*/
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');
const msg = document.querySelector('#msg')
const res = document.querySelector('#game-result');
const retryButton = document.querySelector('#play-again');

function play(e) {
    let computerChoice = getComputerChoice();
    let playerChoice = (e.target.alt).toLowerCase();


    if (pScore.textContent !== '3' && cScore.textContent !== '3') {
        if (playRound(playerChoice, computerChoice) === 'win') {
            pScore.textContent++;
            msg.textContent = `WIN, computer picked ${computerChoice}`;
        } else if (playRound(playerChoice, computerChoice) === 'lose') {
            cScore.textContent++;
            msg.textContent = `LOSE, computer picked ${computerChoice}`;
        } else {
            msg.textContent = `TIE, computer picked ${computerChoice}`;
        }
    }

    if (pScore.textContent === '3') {
        res.innerHTML = 'You Won!';
        retryButton.innerHTML = '<button id="play-again-button">play again?</button>';
 
    } else if (cScore.textContent === '3') {
        res.innerHTML = 'You Lost!';
        retryButton.innerHTML = '<button id="play-again-button">play again?</button>';

    }
    
}

function restart(e) {
    msg.textContent = `START!`;
    pScore.textContent = '0';
    cScore.textContent = '0';
    res.innerHTML = '';
    retryButton.innerHTML = '';

}

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', play));

retryButton.addEventListener('click', restart);






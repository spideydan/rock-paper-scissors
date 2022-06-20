let playerSelection = prompt('Choose rock, paper, or scissors')
while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
    alert('Wrong input')
    playerSelection = prompt('Choose rock, paper, or scissors')
}


// Create a function that will return randomly generated R,P,S
function computerPlay() {
    let randomNumber = Math.ceil(Math.random() * 3)
    if (randomNumber === 1) {
        return 'Rock'
    } else if (randomNumber === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors'
    } else {
        return 'Tie! Try again!'
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let tie = 0
    for (let i = 1; i <= 5; i++) {
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
        if (playRound(playerSelection, computerSelection).includes('win')) {
            playerScore += 1
        } else if (playRound(playerSelection, computerSelection).includes('lose')) {
            computerScore += 1
        } else {
            tie += 1
        }
    }
    console.log(`Your score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Total ties: ${tie}`)
}

game()
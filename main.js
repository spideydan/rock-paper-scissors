function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

const rock = document.createElement('button')
rock.innerText = 'Rock'
rock.classList = 'rock'
document.body.appendChild(rock)

const paper = document.createElement('button')
paper.innerText = 'Paper'
paper.classList = 'paper'
document.body.appendChild(paper)

const scissors = document.createElement('button')
scissors.innerText = 'Scissors'
scissors.classList = 'scissors'
document.body.appendChild(scissors)

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let userChoice = e.target.textContent.toLowerCase()
        console.log(userChoice)
        playRound(userChoice)
    })
})

let playerScore = 0
let computerScore = 0
let totalTies = 0

function playRound(userChoice, computerSelection) {
    computerSelection = computerPlay()
    playerSelection = userChoice
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerScore++
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore++
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerScore++
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore++
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        computerScore++
        console.log(computerScore)
    } else {
        totalTies++
    }
}

const results = document.createElement('div')
document.body.appendChild(results)

const player = document.createElement('span')
player.classList.add('player-score')
player.textContent += `${playerScore} total player wins`

const computer = document.createElement('span')
computer.classList.add('computer-score')
computer.innerText += `${computerScore} total computer wins`

const ties = document.createElement('span')
ties.classList.add('ties')
ties.textContent += `${totalTies} total ties`

results.appendChild(player)
results.appendChild(computer)
results.appendChild(ties)
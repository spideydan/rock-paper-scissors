let playerScore = 0
let computerScore = 0
let totalTies = 0

const choices = document.createElement('div')
document.body.appendChild(choices)

const rock = document.createElement('button')
rock.innerText = 'Rock'
rock.classList = 'rock'
choices.appendChild(rock)

const paper = document.createElement('button')
paper.innerText = 'Paper'
paper.classList = 'paper'
choices.appendChild(paper)

const scissors = document.createElement('button')
scissors.innerText = 'Scissors'
scissors.classList = 'scissors'
choices.appendChild(scissors)

const buttons = document.querySelectorAll('button')

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

const winner = document.createElement('span')
winner.classList.add('winner')

results.appendChild(player)
results.appendChild(computer)
results.appendChild(ties)
results.appendChild(winner)


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let userChoice = e.target.textContent.toLowerCase()
        playRound(userChoice)
    })
})

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

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
    } else {
        totalTies++
    }
    player.textContent = `${playerScore} total player wins`
    computer.innerText = `${computerScore} total computer wins`
    ties.textContent = `${totalTies} total ties`

    if (playerScore === 5) {
        winner.textContent = 'YOU WIN'
        choices.removeChild(rock)
        choices.removeChild(paper)
        choices.removeChild(scissors)
    } else if (computerScore === 5) {
        winner.textContent = 'YOU LOSE'
        choices.removeChild(rock)
        choices.removeChild(paper)
        choices.removeChild(scissors)
    }
}

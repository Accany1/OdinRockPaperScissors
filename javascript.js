getComputerChoice = () => {
    const answerInt = Math.floor(Math.random()*3)
    if (answerInt === 1) {
        return "rock"
    } else if (answerInt === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Score initialization
let computerScore = 0
let humanScore = 0

//Declaration initiation
const declareDiv = document.querySelector("#declaration")
const declare = document.createElement('h3')
declareDiv.appendChild(declare)

playRound = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice){
        declare.textContent = "Draw!"
        return
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1
        declare.textContent = "You lose! Rock beats Scissors"
        return computerScore
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1
        declare.textContent = "You win! Paper beats Rock"
        return humanScore
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1
        declare.textContent = "You lose! Paper beats Rock"
        return computerScore
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore += 1
        declare.textContent = "You win! Scissors beats Paper"
        return humanScore
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1
        declare.textContent = "You win! Rock beats Scissors"
        return humanScore
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1
        declare.textContent = "You lose! Scissors beats Paper" 
        return computerScore
    } else {
        return "Wrong input"
    }
}

checkScore = (computerChoice, humanChoice) => {
    if (computerScore < 5 && humanScore < 5) {
        playRound(computerChoice, humanChoice)
    }
    
    if (computerScore === 5) {
        declare.textContent = 'THE COMPUTER WON'
        result.textContent = ''
        score.textContent = `Final score: Computer:${computerScore} You:${humanScore}`
    } else if (humanScore === 5) {
        declare.textContent = 'YOU WON'
        result.textContent = ''
        score.textContent = `Final score: Computer:${computerScore} You:${humanScore}`
    } else {
        result.textContent = `Computer: ${computerChoice} Human: ${humanChoice}`
        score.textContent = `Final score: Computer:${computerScore} You:${humanScore}`
    }
}

const resultDiv = document.querySelector("#result")
const result = document.createElement('p')
resultDiv.appendChild(result)

const scoreDiv = document.querySelector("#score")
const score = document.createElement('p')
scoreDiv.appendChild(score)

const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice()
    checkScore(computerChoice, 'rock')
})

const paperBtn = document.querySelector('#paper')
paperBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice()
    checkScore(computerChoice, 'paper')
})
const scissorsBtn = document.querySelector('#scissors')
scissorsBtn.addEventListener("click", () => {
    let computerChoice = getComputerChoice()
    checkScore(computerChoice, 'scissors')
})


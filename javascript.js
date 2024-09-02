getHumanChoice = () => {
    const answer = prompt("Rock, Paper or Scissors")
    return answer.toLowerCase()
}

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

playRound = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice){
        console.log("Draw!")
        return
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1
        console.log("You lose! Rock beats Scissors")
        return computerScore
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1
        console.log("You win! Paper beats Rock")
        return humanScore
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1
        console.log("You lose! Paper beats Rock")
        return computerScore
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore += 1
        console.log("You win! Scissors beats Paper")
        return humanScore
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1
        console.log("You win! Rock beats Scissors")
        return humanScore
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1
        console.log("You lose! Scissors beats Paper")
        return computerScore
    } else {
        return "Wrong input"
    }
}

playGame = () => {
    for (let i = 0; i < 5; i ++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        playRound(computerChoice, humanChoice)
        console.log(`Computer: ${computerChoice}`)
        console.log(`Human: ${humanChoice}`)
        console.log(`Score: Computer:${computerScore} You:${humanScore}`)
    }

    console.log(`Final score: Computer:${computerScore} You:${humanScore}`)
}


playGame()




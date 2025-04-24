function getComputerChoice () {
    choice = Math.floor(Math.random() * 3)

    switch (choice) {
        case 0:
            return 'rock'
        
        case 1:
            return 'paper'
        
        default:
            return 'scissors'
    }
}

const result = document.querySelector("#result-div")

let humanScore = 0
const humanScoreElement = document.querySelector("#human-score")
let computerScore = 0
const computerScoreElement = document.querySelector("#computer-score")

function playRound(humanChoice, computerChoice) {
    let roundResult = ""

    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    roundResult = "It's a draw! Both chose Rock."
                    break

                case 'paper':
                    roundResult = "You lose! Paper beats Rock."
                    computerScore += 1
                    break

                case 'scissors':
                    roundResult = "You win! Rock beats Scissors."
                    humanScore +=1
                    break
            }
            break
        
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    roundResult = "You win! Paper beats Rock."
                    humanScore +=1
                    break
                    
                case 'paper':
                    roundResult = "It's a draw! Both chose Paper."
                    break

                case 'scissors':
                    roundResult = "You lose! Scissors beats Paper."
                    computerScore += 1
                    break
            }
            break

        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    roundResult = "You lose! Rock beats Scissors."
                    computerScore += 1
                    break
                    
                case 'paper':
                    roundResult = "You win! Scissors beats Paper."
                    humanScore +=1
                    break
                        
                case 'scissors':
                    roundResult = "It's a draw! Both chose Scissors."
                    break
            }
            break
    }

    result.textContent = roundResult
}

const btns = document.querySelectorAll("button")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent.toLowerCase(), getComputerChoice())
        humanScoreElement.textContent = humanScore
        computerScoreElement.textContent = computerScore
    })
})

function getHumanChoice() {
    let playerChoice = prompt("Which hand do you wish to play? (Rock, Paper or Scissors)")

    return playerChoice.toLocaleLowerCase()
}

// function playGame() {
//     let humanScore = 0
//     let computerScore = 0

//     for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice()
//         const computerChoice = getComputerChoice()

//         playRound(humanChoice, computerChoice)
//     }

//     console.log("The final game results are:")
//     console.log("W: " + humanScore + " | D: " + (5 - (computerScore + humanScore)) + " | L: " + computerScore)

//     if (humanScore > computerScore) {
//         console.log("You've WON against the machine!")
//     }
//     else if (humanScore < computerScore) {
//         console.log("You've LOST against the machine...")
//     }
//     else {
//         console.log("Its a draw!")
//     }
// }
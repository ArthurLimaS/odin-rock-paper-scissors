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

const result = document.querySelector("#match-result")

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
        let playerChoice

        if (btn.id == "rock-btn") {
            playerChoice = "rock"
        } else if (btn.id == "paper-btn") {
            playerChoice = "paper"
        } else if (btn.id == "scissors-btn") {
            playerChoice = "scissors"
        }


        let computerChoice = getComputerChoice()

        playRound(playerChoice, computerChoice)

        humanScoreElement.textContent = humanScore
        computerScoreElement.textContent = computerScore

        if (humanScore >= 5) {
            alert("Você VENCEU!")
        }

        if (computerScore >= 5) {
            alert("Você PERDEU!")
        }
    })
})
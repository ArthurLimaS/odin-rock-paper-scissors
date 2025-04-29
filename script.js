//// DOM ELEMENTS

// SCORE BAR
const humanScoreElement = document.querySelector("#player-score")
const computerScoreElement = document.querySelector("#computer-score")

// MATCH AREA
const matchResult = document.querySelector("#match-result")
const playerChoiceElement = document.querySelector("#player-choice")
const computerChoiceElement = document.querySelector("#computer-choice")

// CHOICE AREA
const game_btns = document.querySelectorAll(".game-button")

// MODAL
const modal = document.querySelector("#modal")
const replay_btn = document.querySelector(".replay-btn")
const gameResult = document.querySelector("#game-result")

// OTHER VARIABLES
let humanScore = 0
let computerScore = 0

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

    matchResult.textContent = roundResult
}

function changeImage(element, choice) {
    if (choice == "rock") {
        element.src = "./images/rock_circle.png"
        element.alt = "A fist that can smash metal blades, like scissors easily."
    } else if (choice == "paper") {
        element.src = "./images/paper_circle.png"
        element.alt = "A palm that can cover stones but vulnerable to small blades."
    } else if (choice == "scissors") {
        element.src = "./images/scissors_circle.png"
        element.alt = "Ready to tear a paper apart during a shifumi tournament but is vulnerable to rocks."
    } else if (choice == "q") {
        element.src = "./images/question_mark.png"
        element.alt = "a question mark"
    } else if (choice == "qr") {
        element.src = "./images/question_mark_reversed.png"
        element.alt = "a question mark"
    }
}

// EVENT LISTENERS

game_btns.forEach((btn) => {
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

        changeImage(playerChoiceElement, playerChoice)
        changeImage(computerChoiceElement, computerChoice)

        humanScoreElement.textContent = humanScore
        computerScoreElement.textContent = computerScore

        if (humanScore >= 5) {
            modal.style.display = "block"
            gameResult.textContent = "You WIN!"
        }

        if (computerScore >= 5) {
            modal.style.display = "block"
            gameResult.textContent = "You LOSE!"
        }
    })
})

replay_btn.addEventListener("click", () => {
    humanScore = 0
    computerScore = 0

    changeImage(playerChoiceElement, "q")
    changeImage(computerChoiceElement, "qr")

    modal.style.display = "none"
})

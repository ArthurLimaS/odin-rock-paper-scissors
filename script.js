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

function getHumanChoice() {
    let playerChoice = prompt("Which hand do you wish to play? (Rock, Paper or Scissors)")

    console.log(playerChoice.toLocaleLowerCase())
    return playerChoice.toLocaleLowerCase()
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

    console.log(roundResult)
}
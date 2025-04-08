let humanScore = 0
let computerScore = 0


function getComputerChoice () {
    choice = Math.floor(Math.random() * 3)

    switch (choice) {
        case 0:
            return 'R'
        
        case 1:
            return 'P'
        
        default:
            return 'S'
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Which hand do you wish to play? (Rock, Paper or Scissors)")

    console.log(playerChoice)
}
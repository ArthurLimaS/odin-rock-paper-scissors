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
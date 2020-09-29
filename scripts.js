//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    const weapons = ['Rock', 'Paper', 'Scissors']
    return weapons[Math.floor(Math.random() * 3)]
}; 

//let answer = prompt('Please select Rock, Paper, Scissors')

let playerScore = 0; 
let computerScore = 0; 

function playround(playerSelcetion, computerSelection){
    let choice = prompt('pick rock paper, or scissors')
    let userInput = choice; 
    playerSelcetion = userInput.toLowerCase(); 
    
    if(playerSelcetion === 'rock' && computerSelection === 'rock') {
        return 'There is a tie'
    } else if(playerSelcetion === 'paper' && computerSelection === 'paper'){
        return 'There is a tie'
    } else if(playerSelcetion === 'scissors' && computerSelection === 'scissors'){
        return 'There is a tie'
    } 

    if(playerSelcetion === 'rock' && computerSelection === 'paper'){
        playerScore++
        return `${playerSelcetion} beats ${computerSelection}. Player wins!`
    } else if(playerSelcetion === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return `${playerSelcetion} beats ${computerSelection}. Player wins!`
    } else if(playerSelcetion === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return  `${playerSelcetion} beats ${computerSelection}. Player wins!`
    }
    
    if(computerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++
        return `${computerSelection} beats ${playerSelcetion}. Computer wins!`
    } else if(computerSelection === 'rock' && playerSelcetion === 'scissors'){
        computerScore++
        return `${computerSelection} beats ${playerSelcetion}}. Computer wins!`
    } else if(computerSelection === 'scissors' && playerSelcetion === 'paper'){
        computerScore++
        return  `${playerSelcetion} beats ${computerSelection}. Computer wins!`
        
    }
    
}
function game(){
    
    playround("", computerPlay())
    playround("", computerPlay())
    playround("", computerPlay())
    playround("", computerPlay())
    playround("", computerPlay())

    if (playerScore>computerScore){
        console.log('You Have Won')
    }else {
        console.log('You Have Lost Machines Have Won')
}    
   
     
}


console.log(game())



//Write a NEW function called game(). 
//Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.




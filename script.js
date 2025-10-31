console.log("lets go!!!")

const getComputerChoice =()=>{
    switch(Math.floor(Math.random()*3)){
        case 0: return "rock"
        case 1: return "paper"
        default: return "scissors"
    }
   
}


const getHumanChoice=()=>{
    return prompt("Enter your choice")
}

let humanScore =0;
let computerScore =0;



const playGame =()=>{
    const playRound =(humanChoice,computerChoice)=>{
    if(humanChoice.toLowerCase()==="rock" && computerChoice.toLowerCase()==="paper"){
        console.log(`your choice is ${humanChoice} and the computer choice is ${computerChoice}`)
        console.log("you have lost,Paper beats rock")
        computerScore +=1
    }

    else if(computerChoice.toLowerCase()==="rock" && humanChoice.toLowerCase()==="paper"){
        console.log(`your choice is ${humanChoice} and the computer choice is ${computerChoice}`)
        console.log("you have won,Paper beats rock")
        humanScore +=1
    }


    else if(computerChoice.toLowerCase()==="scissors" && humanChoice.toLowerCase()==="paper"){
        console.log(`your choice is ${humanChoice} and the computer choice is ${computerChoice}`)
        console.log("you have lost,Scissors beats paper")
        computerScore +=1
    }
    else if(computerChoice.toLowerCase()==="paper" && humanChoice.toLowerCase()==="scissors"){
        console.log(`your choice is ${humanChoice} and the computer choice is ${computerChoice}`)
        console.log("you have won,Scissors beats Paper")
        humanScore +=1
    }


    else if(computerChoice.toLowerCase()==="rock" && humanChoice.toLowerCase()==="scissors"){
        console.log(`your choice is ${humanChoice} and the computer choice is ${computerChoice}`)
        console.log("you have lost,Rock beats Scissors")
        computerScore +=1
    }
    else if(computerChoice.toLowerCase()==="scissors" && humanChoice.toLowerCase()==="rock"){
        console.log(`your choice is ${humanChoice} and the computer choice is ${computerChoice}`)
        console.log("you have won,Rock beats Scissors")
        humanScore +=1
    }
    else{
        console.log(`your choice is ${humanChoice} and the computer choice is ${computerChoice}`)
        console.log("No one wins")

    }
    console.log(`Your score is ${humanScore}`)
    console.log(`Computer Score is ${computerScore}`)


}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//computerScore >humanScore ? "Computer wins" :" You win"


}
let rockBtn =document.createElement("button")
let paperBtn =document.createElement("button")
let scissorsBtn =document.createElement("button")

const choiceDiv =document.querySelector("#choiceDiv")
let headP=document.createElement("p")


rockBtn.textContent="Rock"
paperBtn.textContent="Paper"
scissorsBtn.textContent="Scissors"
headP.textContent ="Welcome to the arena /n choose either rock paper or scissors using the buttons and wait for results"

choiceDiv.appendChild(headP)
choiceDiv.appendChild(rockBtn)
choiceDiv.appendChild(paperBtn)
choiceDiv.appendChild(scissorsBtn)



console.log("lets go!!!")

const getComputerChoice =()=>{
    switch(Math.floor(Math.random()*3)){
        case 0: return "rock"
        case 1: return "paper"
        default: return "scissors"
    }
   
}
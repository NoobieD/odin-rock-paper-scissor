let computerPlay=()=>{
    let choices=["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*3)];
}

let playRound=(computerSelection,playerSelection)=>{
    let playerCount=0;
    let computerCount=0;
    for(let i=0;i<5;i++){
        let computerSelection = computerPlay();
        let playerSelection=prompt("Enter your selection").toLowerCase();
        if(computerSelection===playerSelection){
            console.log("Tie Game");
        }
        else{
            if((computerSelection=="rock" && playerSelection=="scissor") || (computerSelection=="paper" && playerSelection=="rock") || (computerSelection=="scissor" && playerSelection=="paper")){
                computerCount++;
                console.log(`Computer beats your ${playerSelection} with ${computerSelection}`);
            }

            else{
                playerCount++;
                console.log(`You beat computer's ${computerSelection} with ${playerSelection}`);
            }
        }    
    }
    console.log(`Computer Score is ${computerCount} and Player Score is ${playerCount}`);
    
    console.log(computerCount>playerCount?'Computer Wins':'Player Wins');
}



playRound();


function getComputerChoice(){
    let computerChoice = "";
    let choice = Math.random();

    if(choice >= 0 && choice < 1/3){
        computerChoice = rock;
    } else if(choice >= 1/3 && choice < 2/3){
        computerChoice = paper;
    } else {computerChoice = scissors;
    }

   console.log("Computer chose: " + computerChoice);
   return computerChoice;
}



const rockbtn = document.querySelector(".rock")
const rock = 'Rock'
const scissors = 'Scissors'
const paper = 'Paper'
const scissorsbtn = document.querySelector(".scissors")
const paperbtn = document.querySelector(".paper")
const resultDisplay = document.querySelector(".results")
const runningScore = document.querySelector(".score")







let humanScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    
    const computerChoice = getComputerChoice();
    let result = '';
    if (playerChoice === computerChoice){
        result = 'It\'s a tie';
    console.log( "It's a tie!");
    console.log(`Computer Score: ${computerScore} - Human Score: ${humanScore}`)
  
   } else if(
    (playerChoice === rock && computerChoice === scissors) || 
   (playerChoice === paper && computerChoice === rock) || 
   (playerChoice === scissors && computerChoice === paper))
   {
    humanScore += 1;
    result = 'You win!'
    console.log(` Congrats, You Win! ${playerChoice} beats ${computerChoice}.`);
    console.log(`Computer Score: ${computerScore} - Human Score: ${humanScore}`)

   } else { 
    computerScore +=1;
    result = 'You lose!'
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    console.log(`Computer Score: ${computerScore} - Human Score: ${humanScore}`)
    }
    resultDisplay.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    runningScore.textContent = `Computer Score: ${computerScore} - Human Score: ${humanScore}`
    //Play a first to 5
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            console.log('Overall Winner: Player!');
            alert('Overall Winner: Player!');
        } else {
            console.log("Overall Winner: Computer");
            alert('Overall Winner: Computer');
        }
        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
    }
}
    

rockbtn.addEventListener('click', () => playRound(rock));
paperbtn.addEventListener('click', () => playRound(paper));
scissorsbtn.addEventListener('click', () => playRound(scissors));


/*function playGame() {
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    let game = playRound(humanChoice, computerChoice);
    console.log(game);
    }
if (humanScore > computerScore){
    console.log('Overall Winner: Player!');
}else{
        console.log("Overall Winner: Computer");
    }}
playGame();

*/
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock' ||userInput==='paper'|| userInput==='scissors'|| userInput==='bomb'){
    return userInput;
  }
  else{
    return 'error message';
  }
}
//getUserChoice('Rock');
function getComputerChoice(){
  randomNumbers=Math.floor(Math.random() * 3);
  switch(randomNumbers){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
}
//console.log(getComputerChoice());
/*function determineWinner( userChoice, computerChoice){
  if(userChoice===computerChoice){return 'The game is a tie'};
  if(userChoice==='rock' && computerChoice==='paper'){return 'computer won';}else{ return 'you won';};
  if(userChoice==='paper' && computerChoice==='scissor'){return 'computer won';}else{return 'you won';};
  if(userChoice==='scissor' && computerChoice==='rock'){ return 'computer won';}else{return 'youwon';};
}
console.log(determineWinner());*/
function determineWinner(userChoice, computerChoice){
  if(userChoice==='bomb'){ return 'you won';}
  if (userChoice===computerChoice){ return 'tie';}
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'computer won';
      }else{return 'you won';}
    }
  if(userChoice==='paper'){
    if(computerChoice==='scissors'){return 'computerwon';}
    else{return 'you won';}
  }
  if(userChoice==='scissors'){
    if(computerChoice==='rock'){return 'computer won';}
    else{return 'you won';}
  } 
}
//console.log(determineWinner('rock','scissor'));
function playGame(){
  const userChoice=getUserChoice('paper');
  const computerChoice=getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice));};
playGame();

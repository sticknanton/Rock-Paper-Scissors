////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log('Please choose either rock, paper or scissors.')
    
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////



function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal 	//	//`getInput()`.
    //return 
	
	if (move===null)
	{
	move = getInput();
	}
	return move;
	}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal 	//	//`randomPlay()`.
    //return 
	if(move===null) 
	{
	    move = randomPlay();
	}
	return move;
	}	
	

function getWinner(playerMove,computerMove) {
    var winner = 'tie';

 if((playerMove=='rock'&&computerMove=='scissors')||(playerMove=='scissors'&&computerMove=='paper')||(playerMove=='paper'&&computerMove=='rock'))
	{
	winner='player';
	return winner;
	}
else if((computerMove=='rock'&&playerMove=='scissors')||(computerMove=='scissors'&&playerMove=='paper')||(computerMove=='paper'&&playerMove=='rock'))
	{winner='computer';
	return winner;
	}
	
    return winner;
	}


function playToFive() {
	var playerWins = 0;
	var computerWins = 0;
	var computerMove;
	var playerMove; 
	var winner = 'tie';
	
	console.log('Lets play Rock, Paper, Scissors! First player to five victories is the champion!');
    
	while(playerWins<5&&computerWins<5)
	{
	winner = 'tie';
	while (winner=='tie')
	{
	computerMove=null;
	playerMove=null;
	computerMove = getComputerMove(computerMove);
	playerMove = getPlayerMove(playerMove);
	
	winner = getWinner(playerMove,computerMove);
	
	if(winner=='player')
	  playerWins+=1;
	else if(winner=='computer')
	  computerWins+=1;
	if (winner!='tie')
	{  
	console.log('Player picked ' + playerMove + ' and the Computer opponent chose ' + computerMove);
	console.log('The score is currently Player: ' + playerWins + ' Computer: ' + computerWins);
	}
	else console.log('Both opponents chose' + playerMove);
	}
	}
   
    return [playerWins, computerWins];
}

function playFirstTo(num) {
	var playerWins = 0;
	var computerWins = 0;
	var computerMove;
	var playerMove; 
	var winner = 'tie';
	
	console.log('Lets play Rock, Paper, Scissors! First player to five victories is the champion!');
    
	while(playerWins<num&&computerWins<num)
	{
	winner = 'tie';
	while (winner=='tie')
	{
	computerMove=null;
	playerMove=null;
	computerMove = getComputerMove(computerMove);
	playerMove = getPlayerMove(playerMove);
	
	winner = getWinner(playerMove,computerMove);
	
	if(winner=='player')
	  playerWins+=1;
	else if(winner=='computer')
	  computerWins+=1;
	if (winner!='tie')
	{  
	console.log('Player picked ' + playerMove + ' and the Computer opponent chose ' + computerMove);
	console.log('The score is currently Player: ' + playerWins + ' Computer: ' + computerWins);
	}
	else console.log('Both opponents chose' + playerMove);
	}
	}
   
    return [playerWins, computerWins];
}


function guessGame(){

	var randomNumber = Math.random();
	var range = randomNumber*10+1;
	var num = Math.floor(range);

	var input = prompt("Guess the number\n1 to 10");

	var i = 0;

while (i<3){

   	var ip = Number(input);

	if(ip!==num && i<2){input = prompt("Incorrect, Please try again");}
	

	if (ip==num){
		alert("You are right, You won!!!");
		 ask = prompt("Do you want to play again?\n Y or N");
	
	if (ask.toLowerCase()=="y") {return guessGame();}
	else{return document.write("<h4>Thank you for playing with us.</h4>");}
}
	i++; 

	if (i>2) {alert("You lose");
		 ask = prompt("Do you want to play again?\n Y or N");
	
	if (ask.toLowerCase()=="y") {return guessGame();}
	else{return document.write("<h4>Thank you for playing with us.</h4>");}
}
}
}
guessGame();


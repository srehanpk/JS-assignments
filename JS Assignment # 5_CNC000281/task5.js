
var amount = prompt("Enter withdrawl amount\n 100-99990");

document.write("Withdrawl amount = Rs "+ amount);

var amou = Number(amount);


var len = amount.length;


function calNote() {

	var a100 = amount;
if (amou<1000) {
	a100 = amount.charAt(0)

	var a = amou%100;

	var b = a%50;

	var c10 = b/10;

	var b50 = (a-b)/50; 


document.write("<br><br>You will have<br> "+a100+" Hundred Notes<br> "+b50+" Fifty notes<br> "+c10+" Ten notes");
}

else if (amou>=1000 && amou <10000) {
	a100 = amount.slice(0,2);

 a = amou%100;

 b = a%50;

 c10 = b/10;

 b50 = (a-b)/50; 


document.write("<br><br>You will have<br> "+a100+" Hundred Notes<br> "+b50+" Fifty notes<br> "+c10+" Ten notes");
}

else if (amou>=10000 && amou<100000) {

	a100 = amount.slice(0,3)

 a = amou%100;

 b = a%50;

 c10 = b/10;

 b50 = (a-b)/50;

document.write("<br><br>You will have<br> "+a100+" Hundred Notes<br> "+b50+" Fifty notes<br> "+c10+" Ten notes");


}

}
calNote();


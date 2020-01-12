

var input = prompt("Input Number");

document.write("Number is: "+input)

var a = input.split("");

var l = input.length;

var sum = 0;

var total = sum/l;


for (var i = 0; i < input.length; i++){

	sum = sum + Number(a[i]);

	
}
var total = sum/l;

document.write("<br><br> Mean of Digits is: "+ Math.round(total));

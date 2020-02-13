var n1 = prompt("Check Factorial");

var n2 = Number(n1);

function factorial(n){

	if (n<=1) {
		return 1;
	}
	else {return n * factorial(n-1);
	}
}

var n3 =factorial(n2);


document.write("Factorial of  " + n2 + " is " + n3);

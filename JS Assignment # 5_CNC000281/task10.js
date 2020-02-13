
var input = prompt("Enter any thing to check how many vowels in it ");

var count= 0;

function howManyVowels(){

	var input1 = input.toLowerCase();
	var len = input1.length;
	var i = 0;

		while (i<len) {

			switch (input1.charAt(i)) {

			case "a":
	
			case "e":
		
			case "i":
		
			case "o":
		
			case "u":
				count++;
			break;
	}
			i++;
}
	if (count==0) {document.write("<b>There are no vowels in the string</b>");}
	else {document.write("<b>There are "+count+" vowels in the string</b>")}
}

howManyVowels();



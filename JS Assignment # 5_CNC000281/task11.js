
var input = prompt("Enter any character to check is it vowel?");

var count= 0;

function isVowel(){

	var in1 = input.toLowerCase();

			switch (in1) {

			case "a":
	
			case "e":
		
			case "i":
		
			case "o":
		
			case "u":
				document.write("<b>True<br>"+input+" is vowel</b>");
				return true;
	}
				document.write("<b>False<br>"+input+" is not vowel</b>");
				return false;
	}

var ans = isVowel();

alert(ans);



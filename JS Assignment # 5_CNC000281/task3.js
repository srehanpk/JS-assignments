var w = prompt("Write a word to check it is palindrome or not ?")


function pal() {

var w1 = w.toLowerCase();

var len = w1.length;

var w2 = w1;
console.log(w2);

for (var i = 0; i <len; i++) {

	if (w1.charAt(i)!== w2.charAt(len-i-1)) {

		return false;
		}

	}
	return true;
}
alert(pal());
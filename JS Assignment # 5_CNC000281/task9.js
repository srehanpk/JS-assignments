
var d1 = new Date();
document.write("<h3>Current Date:</h3>"+"<b>"+d1+"</b>");

var dd = prompt("How many weeks you want to add");


function addWeeks() {

		document.write("<h3>Weeks to add: "+dd+"</h3>")
	
	var t = d1.getTime();

	var add = ((1000*60*60*24)*dd)*7;

	var add1 = t+add

	var d2 = new Date(add1);

		document.write("<h3>New date after addition:</h3>"+"<b>"+d2+"</b>")

}

addWeeks();
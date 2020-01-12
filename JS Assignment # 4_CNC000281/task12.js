
var d = new Date();

document.write(d);

var day = d.getDate();

console.log(day);

if (day < 16) {document.write("<h3>First fifteen days of the month</h3>");} 

	else {document.write("Last days of month");}
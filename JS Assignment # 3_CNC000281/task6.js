
var c=["Karachi", "Lahore", "Islamabad", "Faisalabad"];

var o=["th", "st", "nd", "rd"];

var u=c.length;

for (var i=0; i<u; i++) {

	 if (i==0) {document.write("1"+o[1]+" choice is "+c[0])} 

else if (i==1) {document.write("<br>2"+o[2]+" choice is "+c[1])} 

else if (i==2) {document.write("<br>3"+o[3]+" choice is "+c[2])} 

else if (i==3) {document.write("<br>4"+o[0]+" choice is "+c[3])} 

}
console.log(c);
console.log(o);
var s = prompt("Input your total marks \n Out of 300");

var tm = 300;

var mo = s;

var a1 = " A-one";
var a  = " A";
var b  = " B";
var c  = " Fail";

var r = s * 100 / tm;
 

var ra1 = "Excellent";
var ra  = "Good";
var rb  = "You need to improve";
var rc  = "Sorry";



document.write("<br>Total Marks = " + tm);
document.write("<br><br> Marks Obtained = " + mo);
document.write("<br><br> Percentage = " + r + "%"); 

if (r >= 80) {document.write("<br><br>Grade = " + a1);}

else if (r >=70 && r <80) {document.write("<br><br>Grade = " + a);}

else if (r >=60 && r <70) {document.write("<br><br>Grade = " + b);}

else if (r <60) {document.write("<br><br>Grade = " + c);}



if (r >= 80) {document.write("<br><br>Remarks = " + ra1);}

else if (r >=70 && r <80) {document.write("<br><br>Remarks = " + ra);}

else if (r >=60 && r <70) {document.write("<br><br>Remarks = " + rb);}

else if (r <60) {document.write("<br><br>Remarks = " + rc);}


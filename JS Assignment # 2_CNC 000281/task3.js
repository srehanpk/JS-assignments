
var a = 4;

if (++a === 5) {alert("Given condition of variable a is true"); document.write("A: Alert message displayed.");}

var b = 82;

if (b++ === 83) {alert("Given condition of variable b is true");} else {document.write("<br><br>B : Condition of variable b is false.");}

var c = 12;

if (c++ === 13) {alert("Condition 1 of variable c is true");} else {document.write("<br><br>C.1 : Condition 1 of variable c is false.");}

if (c === 13) {alert("Condition 2 of variable c is true"); document.write("<br><br>C.2 : Alert message displayed");}

if (++c < 14) {alert("Condition 3 of variable c is true");} else {document.write("<br><br>C.3: Condition 3 of variable c is false");}

if (c === 14) {alert("Condition 4 of variable c is true"); document.write("<br><br>C.4 : Alert message displayed. ");}


var materialCost = 20000;

var laborCost = 2000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {alert("The cost equals"); document.write("<br><br> D : Alert message displayed.");}


if (true) {alert("True"); document.write("<br><br>E.1 : Alert message displayed.");}

if (false) {alert("False");} else {document.write("<br><br>E.2 Condition 2 of variable e is false")}

if ("car" < "cat") {alert("car is smaller then cat"); document.write("<br><br>F : Alert message displayed.");}
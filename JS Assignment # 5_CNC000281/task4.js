
var radius = prompt("Input radius of a circle");


function calcCircumference() {

return (radius * 2)*3.14;
}

var circum = calcCircumference();

document.write("The circumference is "+ circum)



function calcArea() {

return (radius * radius)*3.14;
}

var area = calcArea();

document.write("<br><br> The area is "+ area);
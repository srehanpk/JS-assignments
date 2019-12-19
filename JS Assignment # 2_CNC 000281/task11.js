
var t=prompt("Input Time");

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.write(time);



if (t>= 0000 && t<1200) {alert("Good Morning"); document.write("<br>Good Morning!");}

else if (t>= 1200 && t<1700) {alert("Good Afternoon"); document.write("<br>Good Afternoon!");}

else if (t>= 1700 && t<2100) {alert("Good Evening"); document.write("<br>Good Evening!");}

else if (t>= 2100 && t<=2359) {alert("Good Night"); document.write("<br>Good Night!");}
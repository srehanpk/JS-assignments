
var color = prompt("Enter one color of traffic signal ", " ");

if (color === "red") {alert(" You Must Stop"); document.write("<h1>Red = You Must Stop</h1>");}

else if (color === "yellow") {alert(" Get Ready To Move"); document.write("<h1>Yellow = Get Ready To Move</h1>");}

else if (color === "green") {alert(" Move Now"); document.write("<h1>Green = Move Now >>>></h1>");}

else if (color) {alert(color +" is not a traffic signal color"); document.write("<h1>Not a traffic signal color</h1>");}

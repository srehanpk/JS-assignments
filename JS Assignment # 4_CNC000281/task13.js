
var d = new Date();

document.write("<b>Current Date : </b>"+ d);

var t = d.getTime();

document.write("<br><br><b> Elapsed milliseconds since January 1, 1970 : </b>" + t)

var min = t / (1000 * 60);

document.write("<br><br><b> Elapsed minutes since January 1, 1970 : </b>" + min)


console.log(min);



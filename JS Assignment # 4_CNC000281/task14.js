
var d = new Date();
var t1 = d.getTime();

document.write("<b>Current Date : </b>"+ d);

var sec = 1000*60*60;

var t2 = t1-sec;

d.setTime(t2);

document.write("<br><br><b> One hour ago, it was : </b>" + d )





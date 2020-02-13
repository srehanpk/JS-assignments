
var d1 = new Date();
console.log(d1);

var dd = prompt("Enter your Date of Birth \n Use this formate:- oct 12 2020");


function howOld(){

if (dd==null) {return document.write("<h4>Invalid date ...!</h4>");}

	var d2 =new Date(dd);

if (d2=="Invalid Date"){return document.write("<h4>Invalid date ...!</h4>");}

	var utime = d1.getTime()-d2.getTime();
	
	var tdays = utime/(1000*60*60*24);

	var years = tdays/365;

	var mon = years*12;


	var tmonth = mon%12;

	var tdays = tdays%(365/12);


	var year = Math.floor(years);
	var month = Math.floor(tmonth);
	var days = Math.floor(tdays);

	
  	document.write("<h3> You are "+year+" years, "+month+" months and "+days+" days old.");
}

howOld();
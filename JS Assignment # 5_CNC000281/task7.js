
var d = new Date();

var dd = prompt("Input Date \n Use this formate:- oct 12 2020");

var d1 = new Date(dd);


function isWeekend() {


if (dd==null) {return document.write("<h4>Invalid date ...!</h4>");}


var setDay = d1.getDay();
var setMon = d1.getMonth();
var setYear= d1.getFullYear();


		document.write("<br><b> Your date : </b> " + dd);

switch(setDay){

	
	case 1:
		document.write("<h4>Sorry! wait for 5 more days for weekend</h4>");
		break;
	case 2:
		document.write("<h4>Sorry! wait for 4 more days for weekend</h4>");
		break;
	case 3:
		document.write("<h4>Sorry! wait for 3 more days for weekend</h4>");
		break;
	case 4:
		document.write("<h4>Sorry! wait for 2 more days for weekend</h4>");
		break;
	case 5:
		document.write("<h4>Sorry! wait for 1 more day for weekend</h4>");
		break;
	case 6:
	case 0:
		document.write("<h4>Yes it is weekend ...!</h4>");
		break;	

	default:

		document.write("<h4>Invalid date ...!</h4>");


 }

}

isWeekend();


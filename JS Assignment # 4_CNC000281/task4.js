var add = prompt("Enter email address");


if (add.indexOf("@") < 1 || add.indexOf("@") > add.length -5 || add.indexOf("@")== -1) {
	alert("This is not a valid email address");}

	else if (add.indexOf(".") < add.indexOf("@") || add.indexOf(".")==add.indexOf("@")+1 || add.indexOf(".") > add.length -4 || add.indexOf(".")!== add.length -4) {
		alert("This is not a valid email address");}

		else  {alert("Email address is valid");}


		


var pass = prompt("Enter 8 digit password");

var pass1=pass;

var items = "_+/-;:!,£$%?#~@¬&*()[]{}<>=";

var findChar;

var find;


for (var i =0; i< items.length; i++){

     findChar = pass1.charAt([i])

        find = items.indexOf(findChar[0]);

           if (find !== -1){ break;}


}

if (pass.slice(0,1) ==Number(pass.slice(0,1))  ){
	alert("Enter valid pssword \n must start with A-Z, a-z");}

	
	else if (pass.length < 8){
		alert("Enter valid password \n password must be at least8 digit long ");}

	
	else if  (find !== -1) {  
        alert("Enter valid password.\n password only include a-z, A-Z, 0-9.")}
    
	
	else {alert("Password accepted");}



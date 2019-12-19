
var a = 2;
var b = 1;

var c = a + b;

document.write("<br>A = " + a + "<br> B = " + b );


document.write("<br> Result = " + c);

--a;
var d = a + b;

document.write("<br><br> --a; <br> A = " + a + "<br> B = " + b );


document.write("<br> Result = " + d);

--a - --b;


var e = a + b;

document.write("<br><br> --a - --b; <br> A = " + a + "<br> B = " + b );


document.write("<br> Result = " + e);

--a - --b + ++b;

var f = a + b;

document.write("<br><br> --a; - --b + ++b; <br> A = " + a + "<br> B = " + b );


document.write("<br> Result = " + f);

--a - --b + ++b + b--;


var g = a + b;

document.write("<br><br> --a - --b + ++b + b--; <br> A = " + a + "<br> B = " + b );


document.write("<br> Result = " + g);


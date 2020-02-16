
  x=prompt("Input first number");
  
  oper=prompt("Type an operator + - / x");
  
  y=prompt("Input second number");



  if(oper=="+"){z=Number(x)+Number(y);}
  
  else if(oper=="/"){z=Number(x)/Number(y);}


  else if(oper=="*"){z=Number(x)*Number(y);}  


  else if(oper=="-"){z=Number(x)-Number(y);}

  else if(oper=="%"){z=Number(x)%Number(y);}

  var z;

  document.write(x + oper + y);

  alert("Result = " + z);
  
  document.write("<br> Result = " + z);
    
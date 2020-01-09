

var text = "Hayderabad is the capital of Pakistan & Hayderabad is a beautiful city.";

document.write("<h3>Before replacement: </h3>"+text);

text =text.replace(/Hayderabad/g,"Islamabad");

document.write("<h3>After replacement: </h3>"+text);

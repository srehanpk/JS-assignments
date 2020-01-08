

var a = ["cake","apple pie","cookie","chips","patties"];


var b = prompt(
"Welcome to My Bakery what do you want to order sir/ma'am ?\n Our menu : cake,apple pie,cookie,chips,patties");

var c = b.toLowerCase();

console.log(c);

if (c == a[0]) {document.write(a[0]+" is available at index '0' in our bakery");
    
    alert(a[0]+" is available at index '0' in our bakery");}


else if (c == a[1]) {document.write(a[1]+" is available at index '1' in our bakery");
    
    alert(a[1]+" is available at index '1' in our bakery");}

else if (c == a[2]) {document.write(a[2]+" is available at index '2' in our bakery");
    
    alert(a[2]+" is available at index '2' in our bakery");}

else if (c == a[3]) {document.write(a[3]+" is available at index '3' in our bakery");
    
    alert(a[3]+" is available at index '3' in our bakery");}

else if (c == a[4]) {document.write(a[4]+" is available at index '4' in our bakery");
    
    alert(a[4]+" is available at index '4' in our bakery");}


 else {document.write(c+" is not available in our bakery");
    
    alert(c+" is not available in our bakery");}
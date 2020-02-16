

var a = [20,53,78,4,91,12];
document.write("Array before a = ["+a+"]")
var b = [];

var c = [];


for (var i= 0; i<a.length; i++) {

b=i; 

     for (var j=i+1; j<a.length; j++){

	if (a[j]<a[b]){
b=j;

	}

}

c = a[i];
a[i] = a[b];
a[b] = c;

}

console.log("a after "+a);
document.write("<br> Now the array is like: a = ["+a+"]");
console.log(b);
console.log(c);


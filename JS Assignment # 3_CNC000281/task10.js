

var a = [20,53,78,4,91,12];
console.log("a before "+a)
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
document.write("Now the array is like: "+a);
console.log(b);
console.log(c);


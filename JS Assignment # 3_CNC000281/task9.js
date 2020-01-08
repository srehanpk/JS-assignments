

var a = [24,53,78,91,12];

var b =[];

for (var i= 0; i<a.length; i++) { 

if (a[i]>b) {b = a[i];
}

}
console.log(a);
document.write("The largest number is "+b);
console.log(b);

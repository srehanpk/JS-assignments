

var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

document.write("Array :<br> "+arr);
console.log("Array "+arr);
var arr1=[];

var len= arr.length;

for (var i=0; i<len; i++){

	if (arr1.indexOf(arr[i])=== -1){

		arr1.push(arr[i]);
	}
}
document.write("<br><br>Updated array : <br>"+arr1);

console.log("Updated array "+arr1);
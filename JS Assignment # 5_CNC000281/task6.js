

var arr1 = [0,5,1,7];

var arr2 = [1,2,3,4];

var len1 = arr1.length;

var len2 = arr2.length;


var m1 = [];
var m2 = [];

function mirror() {

	for (var i=0; i<len1; i++) {

		m1.push(arr1[i])
		}
			for (var i=0; i<len1; i++) {

			m1.push(arr1[len1-i-1])
		}

	for (var i=0; i<len2; i++) {

		m2.push(arr2[i])
		}
			for (var i=0; i<len2; i++) {

			m2.push(arr2[len1-i-1])
		}
}

mirror();

document.write(" Original array1 = ["+ arr1+"]")
document.write("<br> Original array2 = ["+ arr2+"]")

document.write("<br><br> Mirror array1 = ["+ m1+"]")
document.write("<br> Mirror array2 = ["+ m2+"]")

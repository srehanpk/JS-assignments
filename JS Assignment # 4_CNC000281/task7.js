

var text1 = prompt("Write a sentance or paragraph.","The quick brown fox jumped over the laizy dog.");

var ip = prompt("Write a word which you want to find. ","The")

document.write("<h2>The Main Text:</h2> "+"<b>"+ text1+"</b>");

var text = text1.toLowerCase();

var len = text.length;

var count1 = [];




for (var i = 0; i < len; i++){

	find = text.indexOf(ip.toLowerCase(),i);

if (find!==-1 && find!==count1[count1.length-1]){
	count1.push(find);
}


}

var count = count1.length;



document.write("<h3> There are "+count+" accurence of word "+ip+"</h3>")







		
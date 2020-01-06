var color = ["Red", "Blue", "Green", "pink", "Yellow", "Orange", "Gray", ];


var usr1 =prompt("In which index you want to add color", "");



var usr =prompt("Which colors you wants to delete ", "");


var update=color.splice(usr1,0,usr);


document.write("After add color at index # "+usr1)
document.write("<br>0: "+color[0], "<br>1: "+color[1], "<br>2: "+color[2], "<br>3: "+color[3], "<br>4: "+color[4], "<br>5: "+color[5], "<br>6: "+color[6], "<br>7: "+color[7]); 
console.log(color);
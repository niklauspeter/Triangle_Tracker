function triangulator(){
var side1 = parseInt(document.getElementById("a").value);
var side2 = parseInt(document.getElementById("b").value);
var side3 = parseInt(document.getElementById("c").value);

if
((side1+side2)<=side3|| (side2+side3)<=side1|| (side1+side3)<=side2){
alert("That is not a triangle!");
}
else if (side1 === side2 && side1 ===  side3 && side2 === side3){
alert("this is an equilateral triangle");
}
else if((side1+side2)<=side3 || (side2+side3)<=side1 || (side1+side3)<=side2) {
alert("That is not a triangle!");
}
else if (side1=== side2 && side1!=side3){
alert("this is an isoselece triangle");
}
else if (side1!= side2 && side2=== side3){
alert("this is an isoselece triangle");
}
else if(side1 ===side3 && side1 != side2){
alert("this is an isoselece triangele");
}
else if (side1 != side2 && side1 !=side3 &&side2!=side3){
alert("this is a scalene triangle");
}
else{
alert("this is not a triangle");
}
}
if((side1+side2)<=side3|| (side2+side3)<=side1 || (side1+side3)<=side2){

alert("That is not a triangle!");
}
triangulator();

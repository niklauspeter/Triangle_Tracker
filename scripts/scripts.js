function triangulator(){
  var triSide = [] ;
triSide.push(parseInt(document.getElementById("a").value));
triSide.push(parseInt(document.getElementById("b").value));
triSide.push(parseInt(document.getElementById("c").value));

var side1=triSide[0];
var side2=triSide[1];
var side3=triSide[2];


if
((side1+side2)<=side3|| (side2+side3)<=side1|| (side1+side3)<=side2){
alert("That can't be a triangle!");
}
else if (side1===0 && side2===0 && side3=== 0){
  alert("please insert a value");
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

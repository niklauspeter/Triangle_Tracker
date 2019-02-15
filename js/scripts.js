side1 = prompt("enter the value of your first side");
side2 = prompt("please enter the value of your second side");
side3 = prompt("please enter the value of your third side");
var sides= function(sid){
alert("you have input " + side1 +" "+ side2 +" "+side3);
}
sides();
if(((side1+side2)<=side3)|| (side2+side3)<=side1|| (side1+side3)<=side2){
alert("That is not a triangle!");
}
else if (side1 === side2 && side1 ===  side3 ){
alert("that is an equilateral triangle");
}
else if (side1=== side2 && side1!=side3){
alert("this is an isoselece triangle")
}
else if (side1!= side2 && side2=== side3){
alert("this is an isoselece triangle")
}
else if(side1 ===side3 && side1 != side2){
alert("this is an isoselece triangele")
}
else if (side1 != side2 && side1 !=side3 &&side2!=side3){
alert("this is a scalene triangle")
}
else{
alert("this is not a triangle");
}

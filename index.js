var p1= prompt("Enter Player1 Name");
var p2= prompt("Enter Player2 Name");

var random1 = Math.ceil(Math.random()*6)
var random2 = Math.ceil(Math.random()*6)

document.querySelector(".Left").innerHTML = " "+p1;
document.querySelector(".Right").innerHTML = " "+p2;


document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");

if(random1>random2){
  document.querySelector("h2").innerHTML = p1+" Loves "+p2+" more!❤";
}
else if (random2>random1) {
  document.querySelector("h2").innerHTML = p2+" Loves "+p1+" more!❤";
}
else{
  document.querySelector("h2").innerHTML = p1+" and"+p2+" are equally in love!❤";
}

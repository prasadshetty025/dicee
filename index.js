var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImageSource= "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomnumber2= Math.floor(Math.random()*6)+1;
var randomImageSource= "images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src", randomImageSource);

if(randomNumber1>randomnumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS!!"
}
else if (randomNumber1<randomnumber2) {
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!!"
}
else{
  document.querySelector("h1").innerHTML="DRAW!!"
}

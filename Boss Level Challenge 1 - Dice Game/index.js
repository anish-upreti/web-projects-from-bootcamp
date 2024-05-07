//for first image
var randomNumber1=Math.ceil(Math.random()*6);  // generates a random number from 1 to 6

var randomImageSource1 = "images/dice"+ randomNumber1 + ".png"; // for random image

document.querySelector(".img1").setAttribute("src",randomImageSource1);  // changing the source of first image to random

// for second image
var randomNumber2=Math.ceil(Math.random()*6);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);

// for h1
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins! ";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 wins! 🍾";
}
else{
    document.querySelector("h1").innerHTML = "💪 Draw! 💪";
}
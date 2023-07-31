var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber+".png";
var randomImageSrc="images/"+randomImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImageSrc2="images/"+randomImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSrc2);


if (randomNumber>randomNumber2) 
{
  document.querySelector("h1").innerHTML="🚩player 1 Wins";  
}
else if(randomNumber<randomNumber2)
{
      document.querySelector("h1").innerHTML="player 2 Wins🚩";  
}
else
{
    document.querySelector("h1").innerHTML="DRAW";  

}


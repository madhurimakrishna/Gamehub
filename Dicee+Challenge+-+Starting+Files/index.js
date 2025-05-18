var randomNumber1=Math.random();
randomNumber1 =randomNumber1*6;
randomNumber1 =Math.floor(randomNumber1 );
var ranimag="dice"+randomNumber1+".png";
var ranimagesour="images/"+ranimag;
var setimag=document.querySelectorAll("img")[0];
setimag.setAttribute("src",ranimagesour);
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2 =Math.floor(randomNumber2 );
var ranimag1="dice"+randomNumber2+".png";
var ranimagesour1="images/"+ranimag1;
var setimag1=document.querySelectorAll("img")[1];
setimag1.setAttribute("src",ranimagesour1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAY 1 WINS!";

}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAY 2 WINS!";
}else{
    document.querySelector("h1").innerHTML="DRAW!";
}
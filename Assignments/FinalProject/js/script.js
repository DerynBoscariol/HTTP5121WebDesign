function toggleNav() {
    let menu = document.querySelector("#nav-list");
    menu.classList.toggle("show-small");
};

// Background color change on scroll
window.addEventListener("scroll", function() {
    var dynamicBg = document.querySelector(".scroll-color-change");
    var scrollRange = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
    if (scrollRange< 0.25) { 
        dynamicBg.style.backgroundColor = "#c6e9f9"; 
    } else if (scrollRange < 0.5){
        dynamicBg.style.backgroundColor = "#B4C6EB"; 
    } else if (scrollRange < 0.75){
        dynamicBg.style.backgroundColor = "#5B91B5"; 
    } else if (scrollRange < 1){
        dynamicBg.style.backgroundColor = "#0D5C63";
    }
});

//Record player
var recordPlayerButton = document.getElementById("stop-start");
var recordSpin = document.getElementById("record");
var playerArm = document.getElementById("record-arm");

recordPlayerButton.onclick = function(){
    recordSpin.classList.toggle("play");
    playerArm.classList.add("record-arm-forward");
};

playerArm.onanimationend = function(){

    recordPlayerButton.onclick = function(){
    
    setTimeout(() => { recordSpin.classList.toggle("play");}, 3000)
    playerArm.classList.toggle("record-arm-reverse");
}}

//Coffee spill
var mugSpill = document.getElementById("mug-spill");
var mugTilt = document.getElementById("mug");
var coffeeFlow = document.getElementById("coffee-flow");
var coffeePuddle = document.getElementById("coffee-puddle");
var mugCover = document.getElementById("cup-cover");

mugSpill.onclick = function(){
    mugCover.classList.remove("mug-tilt-cover");
    setTimeout(function(){ mugCover.classList.add('mug-tilt-cover');},10);
    mugTilt.classList.remove("mug-tilt");
    setTimeout(function(){ mugTilt.classList.add('mug-tilt');},10);
    coffeeFlow.classList.remove("coffee-spill");
    setTimeout(function(){ coffeeFlow.classList.add('coffee-spill');},10);
    coffeePuddle.classList.remove("puddle");
    setTimeout(function(){ coffeePuddle.classList.add('puddle');},10);
};


//Beating heart
var heartBeat = document.getElementById("heart");
var heartBox = document.getElementById("heartbeat");

heartBox.onmouseover = () => {
    heartBeat.classList.add("play");
    heartBeat.classList.add("animate");
}

heartBox.onmouseout =()=> {
    heartBeat.classList.remove("play");
    heartBeat.classList.remove("animate");

}

//Blooming flower
var flowerBox = document.getElementById("flower-bloom");
var flowerCenter = document.getElementById("flower-center");
var flowerPetals = document.getElementsByClassName("petal");

flowerBox.onclick = function(){
    
    setTimeout(function(){flowerBox.style.backgroundColor = "#FFFD98";},10);

    flowerCenter.classList.remove("center-bloom");
    setTimeout(function(){flowerCenter.classList.add("center-bloom");},10);

for(i = 0; i < flowerPetals.length; i++) {
    flowerPetals[i].classList.remove("petal-bloom");
  }    
  setTimeout(function()
  {for(i = 0; i < flowerPetals.length; i++) {
    flowerPetals[i].classList.add("petal-bloom");
  } },10);
}



//Bouncing i
var iBox = document.getElementById("bouncing-i");
var iTop = document.getElementById("i-top");
var iBottom =document.getElementById("i-bottom");

iBox.onmouseover = function (){
    iTop.classList.add("play");
    iBottom.classList.add("play");
}

iBox.onmouseout = function(){
    iTop.classList.remove("play");
    iBottom.classList.remove("play");
}
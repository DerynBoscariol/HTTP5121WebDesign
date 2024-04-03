
let square = document.getElementById("square");
let button = document.getElementById("clickSpin")
function spinSquare(){
        square.classList.add("spin");
}
 button.onclick = spinSquare; 

function resetSquare(){
        square.classList.remove("spin");
    }

square.addEventListener("transitionend",resetSquare);
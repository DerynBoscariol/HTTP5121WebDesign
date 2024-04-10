
var button = document.getElementById('playPause');
 sun = document.getElementById('sun');
 sky = document.getElementById('sky');

button.onclick = function(){
sun.classList.toggle('paused');
sky.classList.toggle('paused');

}
 
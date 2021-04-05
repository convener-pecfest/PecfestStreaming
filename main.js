
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var splashCheck = true;
var splash = document.querySelector('div.splash');
var loading = document.querySelector('div.loading');
function removeSplashDisplay(){
  splash.classList.add('display-none');

  // Show Pop Up Modal
  $(document).ready(function() {
    $('#global-modal').modal('show');
  });
}
function removeSplashOpacity(){
  splash.classList.add('opacity-zero');
  splashCheck = false;
  if(!splashCheck){
    loading.classList.add('display-none');
  }
  setTimeout(removeSplashDisplay,200);
}
document.addEventListener('DOMContentLoaded',function(){
  splashCheck = true;
  setTimeout(removeSplashOpacity,2000);
});
document.onload = setTimeout(function(){
  if(splashCheck){
    loading.classList.remove('display-none');
    splash = false;
  }
},4000);

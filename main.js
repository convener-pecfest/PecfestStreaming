
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
  if(!window.sessionStorage.getItem('done')){  /* Line Changed */
    $(document).ready(function() {
      $('#global-modal').modal('show');
      $('#myVideo').get(0).pause();
    });
  //   $ (document).ready(function() {   
  //     if ($ .cookie("popup_1_2") == null) {
  //          $('#global-modal').modal('show');
  //     $ .cookie("popup_1_2", "2");
  //  }
  // });
      $('#global-modal').on('hidden.bs.modal', function () {
        $('#myVideo').get(0).play();
      });
      window.sessionStorage.setItem('done','1');    /* Line Changed */
  }
}
//   
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

function goBack() {
  window.history.back();
}
var vid = document.getElementById("myVideo");
vid.onpause =function() {
    alert("hi");
    document.getElementById(mybtn).style.background = "white";
    document.getElementById(mybtn).style.color = "black";
  
}

// $(document).ready(function(){
//   //loads when document is ready
  
//   if (document.cookie.indexOf('modal_shown=') >= 0) {
//    //do nothing if modal_shown cookie is present
//   } else {
//     $('.modal').modal('show');  //show modal pop up
//     document.cookie = 'modal_shown=seen'; //set cookie modal_shown
//     //cookie will expire when browser is closed
//   }
//   })

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

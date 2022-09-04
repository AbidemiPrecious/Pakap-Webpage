
card = document.querySelector(".seven-card");
features = document.querySelectorAll(".fa");
card.addEventListener("mouseover", function() {
 features.classList.remove("fa")
 features.classList.add("style");
 // console.log("worked");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   document.querySelector(".paka-nav").style.background =  "black"
   document.querySelector(".navbar-toggler").style.background = "white";

  }
  else{
    document.querySelector(".paka-nav").style.background = "transparent";
    document.querySelector(".navbar-toggler").style.background = "transparent";
  }
 }
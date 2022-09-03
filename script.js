
card = document.querySelector(".seven-card");
features = document.querySelectorAll(".fa");
card.addEventListener("mouseover", function() {
 features.classList.remove("fa")
 features.classList.add("style");
 // console.log("worked");
});

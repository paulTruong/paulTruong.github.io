var nav = document.querySelector(".header__menu"),
navList = nav.classList, 
navToggle = document.querySelector(".menu__skip");
if (navToggle) {
  navToggle.addEventListener("click", function(e) {
    if (navList.contains("header__menu_open")) {
      navList.remove("header__menu_open");
    } else {
      navList.add("header__menu_open");
    }
    e.preventDefault();
  }, false);
};

//Dynamically load hero image based on screen width
const screenWidth = window.innerWidth
const image = document.getElementsByClassName('hero__img')
window.onload = () => {
  if (window.location.pathname == '/') { //only applies to homepage.
    screenWidth >= 1250 ? image[0].src="img/hero.png" : image[0].src="" 
  }
}
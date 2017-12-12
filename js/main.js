var nav = document.querySelector(".header__menu"),
navList = nav.classList, 
navToggle = document.querySelector(".menu__skip");

console.log(nav.classList);
console.log(navToggle);

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
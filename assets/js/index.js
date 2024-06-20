/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*=============== MENU Show MOBILE ===============*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*=============== MENU Hidden MOBILE ===============*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
/*=============== REMOVE Menu mobile ===============*/
const navLinks = document.querySelectorAll(".nav__link");
const linkAction = () => {
    const navMenu = document.querySelector("#nav-menu");

    //click each listItems to remove the show-menu
    navMenu.classList.remove("show-menu");
};
navLinks.forEach((link) => link.addEventListener("click", linkAction));

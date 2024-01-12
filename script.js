const featureDropdown = document.querySelector("#feature-dropdown");
const featureLinks = document.querySelector(".feature-links");

const companyDropdown = document.querySelector("#company-dropdown");
const companyLinks = document.querySelector(".company-links");

const mobileMenuBtn = document.querySelector(".mobile-menu");
const menuMobileBackground = document.querySelector(".menu-mobile-background");

const allLinks = document.querySelector(".all-links");

let iconArrowDown1 = "images/icon-arrow-down.svg";
let iconArrowDown2 = "images/icon-arrow-down.svg";
let iconArrowUp1 = "images/icon-arrow-up.svg";
let iconArrowUp2 = "images/icon-arrow-up.svg";

let iconMenu = "images/icon-menu.svg";
let iconMenuClose = "images/icon-close-menu.svg";

let overflowHidden = "hidden";
let overflowVisible = "auto";

featureDropdown.addEventListener("click", () => {
    featureLinks.classList.toggle("hide")

    document.querySelector("#feature-dropdown-arrow").src = iconArrowUp1;

    if(iconArrowUp1) {
        let aux1 = iconArrowDown1;
        iconArrowDown1 = iconArrowUp1;
        iconArrowUp1 = aux1;
    }
})

companyDropdown.addEventListener("click", () => {
    companyLinks.classList.toggle("hide")

    document.querySelector("#company-dropdown-arrow").src = iconArrowUp2;

    if(iconArrowUp2) {
        let aux2 = iconArrowDown2;
        iconArrowDown2 = iconArrowUp2;
        iconArrowUp2 = aux2;
    }
})

mobileMenuBtn.addEventListener("click", () => {
    allLinks.classList.toggle("active")
    menuMobileBackground.classList.toggle("active")

    document.querySelector("#icon-menu").src = iconMenuClose;

    if(iconMenuClose) {
        let aux3 = iconMenu;
        iconMenu = iconMenuClose;
        iconMenuClose = aux3;
    }
})

'use strict';


/**-------------add even listener on multiple elements */

const addEventOnElements = function(elements, eventType, callback){
    for(let i=0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback)
    }
}





/**----------------mobile  nav--------- */

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers=document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);

const closeNav = function (){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNav);


/**-----------------header section and backtop--------------- */

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector("[data-back-to-top-btn]")

window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 50? "add": "remove"]("active");
    backTopBtn.classList[window.scrollY > 50? "add": "remove"]("active");
});



/*------ Typed js ------------*/

const sr = ScrollReveal ({
    distance: '60px',
    duration:2500,
    delay:400,
    reset:true
});


sr.reveal('.hero', {delay:200, origin: 'top'});
sr.reveal('.popular', {delay:800, origin: 'bottom'});
sr.reveal('.menu', {delay:800, origin: 'left'});
sr.reveal('.schedule', {delay:200, origin: 'right'});
sr.reveal('.location', {delay:200, origin: 'right'});
sr.reveal('.reservation', {delay:500, origin: 'top'});




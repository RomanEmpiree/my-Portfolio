var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

/**----------Js for the side menu-------------------- */
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


/*------ Typed js ------------*/

const sr = ScrollReveal ({
    distance: '60px',
    duration:2500,
    delay:400,
    reset:true
});


sr.reveal('.header-text', {delay:200, origin: 'top'});
sr.reveal('.row', {delay:200, origin: 'bottom'});
sr.reveal('.services-list', {delay:200, origin: 'left'});
sr.reveal('.work-list', {delay:200, origin: 'right'});
sr.reveal('.copyright', {delay:200, origin: 'top'});

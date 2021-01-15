const navBar = document.getElementById("navbar");
const navOpen = document.getElementById("nav-btn");
const navClose = document.getElementById("navbar-close");
const navLink = document.querySelectorAll(".nav-link");

// opens navbar when open button is clicked
navOpen.addEventListener("click",()=>{
    navBar.classList.add("show-navbar");
});

// closes navbar when close button is clicked
navClose.addEventListener("click",()=>{
    navBar.classList.remove("show-navbar");
});

// closes navbar when nav link is clicked
navLink.forEach(function(link){
    link.addEventListener("click", function(){
        navBar.classList.remove("show-navbar");
    });
});

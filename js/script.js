const navBar = document.getElementById("navbar");
const navOpen = document.getElementById("nav-btn-open");
const navClose = document.getElementById("nav-btn-close");
const navLink = document.querySelectorAll(".nav-link");
const date = document.getElementById("date");

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

// gives current year
date.innerHTML = new Date().getFullYear();

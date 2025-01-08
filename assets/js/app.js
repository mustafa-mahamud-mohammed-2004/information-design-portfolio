// FOR SHOWING/HIDING THE MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show the Menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        console.log("Menu toggle clicked");
        navMenu.classList.add('show-menu')
    })
}

/* Hide the Menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        console.log("Menu toggle clicked");
        navMenu.classList.remove('show-menu')
    })
}

// REMOVING THE MENU
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// FOR CHANGING THE HEADER
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
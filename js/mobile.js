const mobileHamburger = document.querySelector('.mobile-hamburger');
const mobileHamburgerOff = document.querySelector('.mobile-hamburger-close')
const mobileNav = document.querySelector('.mobile-menu');

mobileHamburger.addEventListener('click', ()=>{
    mobileNav.style.removeProperty('display')
})

mobileHamburgerOff.addEventListener('click', ()=>{
    mobileNav.style.display = "none";
})
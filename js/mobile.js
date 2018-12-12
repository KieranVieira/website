const mobileHamburger = document.querySelector('.mobile-hamburger');
const mobileHamburgerOff = document.querySelector('.mobile-hamburger-close')
const mobileNav = document.querySelector('.mobile-menu');

mobileHamburger.addEventListener('click', ()=>{
    mobileNav.style.removeProperty('display');
    TweenMax.to('.mobile-menu', .5 ,{left:'0vw'})
})

mobileHamburgerOff.addEventListener('click', ()=>{
    TweenMax.to('.mobile-menu', .4 ,{left:'-150vw'})
    setTimeout(()=>{mobileNav.style.display = "none"}, 410)
    
})
const mobileHamburger = document.querySelector('.mobile-hamburger');
const mobileHamburgerOff = document.querySelector('.mobile-hamburger-close')
const mobileNav = document.querySelector('.mobile-menu');

mobileHamburger.addEventListener('click', ()=>{
    mobileNav.style.removeProperty('display');
    TweenMax.to('.mobile-menu', .5 ,{left:'0vw'})
})

mobileHamburgerOff.addEventListener('click', ()=>{
    TweenMax.to('.mobile-menu', .2 ,{left:'-200vw'})
    setTimeout(()=>{mobileNav.style.display = "none"}, 210)
    
})
const controller = new ScrollMagic.Controller();

const item1Scene = new ScrollMagic.Scene({
    triggerElement: "#servicesScrollTarget"
})
.setClassToggle('#firstItem', 'fade-in')
// .setTween("#firstItem", .5, {opacity:1})
.addTo(controller)

const item2Scene = new ScrollMagic.Scene({
    triggerElement: "#secondItem"
})
.setClassToggle('#secondItem', 'fade-in')
// .setTween("#firstItem", .5, {opacity:1})
.addTo(controller)

const item3Scene = new ScrollMagic.Scene({
    triggerElement: "#thirdItem"
})
.setClassToggle('#thirdItem', 'fade-in')
// .setTween("#firstItem", .5, {opacity:1})
.addTo(controller)
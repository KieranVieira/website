const controller = new ScrollMagic.Controller();

const servicesScene = new ScrollMagic.Scene({
    triggerElement: "#servicesScrollTarget",
    //reverse: false, // animation only plays once
})
.setClassToggle('.services', 'fade-in')
.addTo(controller)

const item1Scene = new ScrollMagic.Scene({
    triggerElement: "#servicesScrollTarget",
    //reverse: false, // animation only plays once
})
.setClassToggle('#firstItem', 'fade-in')
.addTo(controller)

const item2Scene = new ScrollMagic.Scene({
    triggerElement: "#secondItem",
    //reverse: false, // animation only plays once
})
.setClassToggle('#secondItem', 'fade-in')
.addTo(controller)

const item3Scene = new ScrollMagic.Scene({
    triggerElement: "#thirdItem",
    //reverse: false, // animation only plays once
})
.setClassToggle('#thirdItem', 'fade-in')
.addTo(controller)

const clientsTrigger = new ScrollMagic.Scene({
    triggerElement: ".clients",
    //reverse: false, // animation only plays once
})
.setClassToggle('.clients', 'fade-in')
.addTo(controller)

const clientsLogoTrigger = new ScrollMagic.Scene({
    triggerElement: ".logoTrigger",
    //reverse: false, // animation only plays once
})
.setClassToggle('.clientsLogo', 'clientsLogoAnim')
.addTo(controller)
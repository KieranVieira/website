const controller = new ScrollMagic.Controller();

const servicesScene = new ScrollMagic.Scene({
    triggerElement: "#servicesScrollTarget",
    reverse: false, // animation only plays once
})
.setClassToggle('.services', 'fade-in')
.addTo(controller)

const item1Scene = new ScrollMagic.Scene({
    triggerElement: "#servicesScrollTarget",
    reverse: false, // animation only plays once
})
.setClassToggle('#firstItem', 'fade-in')
.addTo(controller)

const item2Scene = new ScrollMagic.Scene({
    triggerElement: "#secondItem",
    reverse: false, // animation only plays once
})
.setClassToggle('#secondItem', 'fade-in')
.addTo(controller)

const item3Scene = new ScrollMagic.Scene({
    triggerElement: "#thirdItem",
    reverse: false, // animation only plays once
})
.setClassToggle('#thirdItem', 'fade-in')
.addTo(controller)

const clientsTrigger = new ScrollMagic.Scene({
    triggerElement: ".clients",
    reverse: false, // animation only plays once
})
.setClassToggle('.clients', 'fade-in')
.addTo(controller)

const clientsLogoTrigger = new ScrollMagic.Scene({
    triggerElement: ".logoTrigger",
    reverse: false, // animation only plays once
})
.setClassToggle('.clientsLogo', 'clientsLogoAnim')
.addTo(controller)

const personalProjectsTrigger = new ScrollMagic.Scene({
    triggerElement: ".recent-projects",
    reverse: false,
})
.setClassToggle('.recent-projects', 'fade-in')
.addTo(controller)

const boarProject = new ScrollMagic.Scene({
    triggerElement: "#boar-item",
    reverse: false,
})
.setClassToggle('#boar-item', 'projects-item-anim')
.addTo(controller)

const cocktailProject = new ScrollMagic.Scene({
    triggerElement: "#cocktail-item",
    reverse: false,
})
.setClassToggle('#cocktail-item', 'projects-item-anim')
.addTo(controller)

const planeProject = new ScrollMagic.Scene({
    triggerElement: "#plane-item",
    reverse: false,
})
.setClassToggle('#plane-item', 'projects-item-anim')
.addTo(controller)

const contactCTA = new ScrollMagic.Scene({
    triggerElement: ".collaborate-cta",
    reverse: false,
})
.setClassToggle('.collaborate-cta', 'fade-in')
.addTo(controller)
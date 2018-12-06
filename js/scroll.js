const controller = new ScrollMagic.Controller();

// .setClassToggle('.services', 'fade-in')

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
.addIndicators({ //debugging
    name: 'firstItemTrigger',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#'
})
.addTo(controller)

const item2Scene = new ScrollMagic.Scene({
    triggerElement: "#secondItem",
    reverse: false, // animation only plays once
})
.setClassToggle('#secondItem', 'fade-in')
.addIndicators({ //debugging
    name: 'Second Item Trigger',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#'
})

.addTo(controller)

const item3Scene = new ScrollMagic.Scene({
    triggerElement: "#thirdItem",
    reverse: false, // animation only plays once
})
.setClassToggle('#thirdItem', 'fade-in')
.addIndicators({ //debugging
    name: 'thirdItemTrigger',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#'
})
.addTo(controller)

const clientsTrigger = new ScrollMagic.Scene({
    triggerElement: ".clients",
    reverse: false, // animation only plays once
})
.setClassToggle('.clients', 'fade-in')
.addIndicators({ //debugging
    name: 'clientsTrigger',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#'
})
.addTo(controller)
const modal = document.querySelectorAll('.modal')
modal.forEach(modal => {
    modal.addEventListener('click', () => {
        if(event.target === modal){
            modal.classList.toggle('modal-active', false)
        }
    })
})

const vision = document.querySelector(".vision-modal-toggle")
const visionModal = document.querySelector(".visionModal")
vision.addEventListener('click', () => {
    visionModal.classList.toggle('modal-active')
})

const lilPope = document.querySelector(".lilpope-modal-toggle")
const lilPopeModal = document.querySelector(".lilPopeModal")
lilPope.addEventListener('click', () => {
    lilPopeModal.classList.toggle('modal-active')
})

const coldOnes = document.querySelector(".coldones-modal-toggle")
const coldOnesModal = document.querySelector(".coldOnesModal")
coldOnes.addEventListener('click', () => {
    coldOnesModal.classList.toggle('modal-active')
})

const gz = document.querySelector(".gz-modal-toggle")
const gzModal = document.querySelector(".gzModal")
gz.addEventListener('click', () => {
    gzModal.classList.toggle('modal-active')
})

const cannazon = document.querySelector('.cannazon-modal')
const cannazonModal = document.querySelector('.cannazonModal')
cannazon.addEventListener('click', () => {
    cannazonModal.classList.toggle('modal-active')
})

const hood = document.querySelector('.hood-modal')
const hoodModal = document.querySelector('.hoodModal')
hood.addEventListener('click', () => {
    hoodModal.classList.toggle('modal-active')
})

document.querySelectorAll('.modal-close').forEach(current => {
    current.addEventListener('click', () => {
        modal.forEach(cv => {
            cv.classList.toggle('modal-active', false)
        })
    })
})
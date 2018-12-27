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



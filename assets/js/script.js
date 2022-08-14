let allImages = document.querySelectorAll('img')
allImages.forEach(e => {
    e.setAttribute('draggable', 'false')
})

let allButtons = document.querySelectorAll('button')
allButtons.forEach(e => {
    e.style.userSelect = 'none'
})
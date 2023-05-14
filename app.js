const box = document.querySelector('.box')

let x = 0
let y = 0

const moveBlock = () => {
    if (x <= 449 && y === 0) {
        x++
        box.style.left = `${x}px`
    } else if (x >= 450 && y <= 449) {
        y++
        box.style.top = `${y}px`
    } else if (x > 0 && y >= 450) {
        x--
        box.style.left = `${x}px`
    } else if (x === 0 && y > 0) {
        y--
        box.style.top = `${y}px`
    }

    setTimeout(moveBlock, 1)
}

moveBlock()

const display = document.querySelector('h1')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const clear = document.querySelector('#clear')

let i = 0
let startStop

start.addEventListener('click', () => {
    startStop = setInterval(() => {
        i++
        display.textContent = i
    }, 1000)
    start.disabled = true
})

stop.addEventListener('click', () => {
    clearInterval(startStop)
    start.disabled = false
})

clear.addEventListener('click', () => {
    i = 0
    display.textContent = i
})

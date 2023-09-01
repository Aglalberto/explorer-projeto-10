const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const surge = document.querySelector(".screen2 p")
const cookie = document.querySelector("#cookie")
const bg = document.querySelector("body")
const btnReset = document.querySelector("#btnReset")

// Eventos
cookie.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// Funções
function handleTryClick(event) {
    event.preventDefault()

    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    surge.classList.add("surge")
    bg.classList.add("changeBg")
}

function handleResetClick() {
    toggleScreen()
 
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    bg.classList.remove("changeBg")
}
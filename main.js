// let
// const
// var

let menuButton = document.querySelector(".menu")
let navList = document.querySelector('nav ul')
let exit = document.querySelector("nav ul img")

let navToggle = false

function navMenu() {
    if (navToggle === true) {
        navList.style.display = "flex"
        navToggle = false
    } else {
        navList.style.display = "none"
        navToggle = true
    }
}

menuButton.addEventListener("click", navMenu)

exit.addEventListener("click", navMenu)
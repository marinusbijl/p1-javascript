let antwoordElement = document.getElementById("antwoord");
let getal1Element = document.getElementById("getal1");
let getal2Element = document.getElementById("getal2");

function answer(result) {
    if (result <= 0) {
        antwoordElement.textContent = "Het getal is te laag"
    } else {
        antwoordElement.textContent = "Het antwoord is: " + result
    }
}

function multiply() {
    answer(getal1Element.value * getal2Element.value)
}

function subtract() {
    answer(getal1Element.value - getal2Element.value)
}

function add() {
    answer(Number(getal1Element.value) + Number(getal2Element.value))
}

function divide() {
    answer(getal1Element.value / getal2Element.value)
}
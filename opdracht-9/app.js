let getal = 0;

let getalElement = document.getElementById("getal");

function klik_me() {
    getal = getal + 1;

    if (getal >= 10) {
        getal = 0
    }

    getalElement.textContent = "Getal: " + getal
}
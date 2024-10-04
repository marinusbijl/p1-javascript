let budget = 100;
let product = 60;

let budgetElement = document.getElementById("budget");
budgetElement.textContent = "Budget: " + budget + " euro";
let productElement = document.getElementById("product");
productElement.textContent = "Product: " + product + " euro";

let validatieElement = document.getElementById("validatie");

function kopen() {
    if (budget >= product) {
        validatieElement.textContent = "U heeft genoeg geld!"
        validatieElement.style.color = "green"
    } else {
        validatieElement.textContent = "Helaas, te weinig geldt"
        validatieElement.style.color = "red"
    }
}
let budget = 100;
let product = 60;

let budgetElement = document.getElementById("budget");
budgetElement.textContent = "Budget: " + budget + " euro";
let prijsElement = document.getElementById("prijs");
let validatieElement = document.getElementById("validatie");

function submit() {
    if (budget >= prijsElement.value) {
        validatieElement.textContent = "U heeft genoeg geld!";
        validatieElement.style.color = "green";
    } else {
        validatieElement.textContent = "Helaas, te weinig geldt";
        validatieElement.style.color = "red";
    }
}
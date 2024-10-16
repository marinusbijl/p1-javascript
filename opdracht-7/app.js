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

let productPrompt = prompt("Hoeveel kost het product dat je wilt kopen?", "1");

if (productPrompt != null) {
    product = Number(productPrompt)

    if (budget >= products) {
        validatieElement.textContent = "U heeft genoeg geld!";
        validatieElement.style.color = "green";
    } else {
        validatieElement.textContent = "Helaas, te weinig geld";
        validatieElement.style.color = "red";
    }
} 
let addition = (a, b) => a + b;

let subtraction = (a, b) => a - b;

let multiplication = (a, b) => a * b;

let division = (a, b) => a / b;

function operate (operatorValue, a, b) {
    if (operatorValue == '+') {
        c = addition(a, b);
        return c;
    }

    else if (operatorValue == '-') {
        c = subtraction(a, b);
        return c;
    }

    else if (operatorValue == '*') {
        c = multiplication(a, b);
        return c;
    }
    else if (operatorValue == '/') {
        c = division(a, b);
        return c;
    }
}

function displayValues(buttonHTML) {
    //change console.log("clear") to function that clears displayValues
    displayHTML = buttonHTML !== "C" ? 
        displayId.innerHTML += buttonHTML : clearValues();
}

function resetAB () {
    a = "";
    b = "";
}

function clearValues() {
    a = "";
    b = "";
    c = "";
    operatorValue = "";
    displayId.innerHTML = "";
}

let a = "";
let b = "";
let c = "";
let operatorValue = "";
let displayHTML = "";

const numberValue = document.querySelectorAll(".numberButton");

//when a button is pressed display the button html
var calculator = document.getElementById("calculator");
let displayId = document.getElementById("displayText");
calculator.addEventListener("click", (event) => {
    const isbutton = event.target.nodeName === "BUTTON";
    var buttonClass = event.target.className;
    if (!isbutton) {
        return;
    }

    let buttonHTML = event.target.innerHTML;
    displayValues(buttonHTML);

    if (buttonClass == "operatorButton" && operatorValue == "") {
        operatorValue = buttonHTML;
    } else if (buttonClass == "operatorButton" && operatorValue !== "" && c == "") {
        displayValues(operate(operatorValue, Number(a), Number(b))); 
        console.log(a);
    } else if (buttonClass == "operatorButton" && operatorValue !== "" && c !== "") {
        displayValues(operate(operatorValue, Number(c), Number(a))); 
    } else if (buttonClass == "numberButton" && operatorValue == "") {
        a += buttonHTML;
    } else if (buttonClass == "numberButton" && operatorValue !== "") {
        b += buttonHTML;

    }
})
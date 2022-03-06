let addition = (a, b) => Number(a) + Number(b);
let subtraction = (a, b) => Number(a) - Number(b);
let multiplication = (a, b) => Number(a) * Number(b);
let division = (a, b) => Number(a) / Number(b);

function operate (a, b, operatorValue) {
    //can do switch??
    if (operatorValue == '+') {
        return c = addition(a, b);
    } else if (operatorValue == '-') {
        return c = subtraction(a, b);
    } else if (operatorValue == '*') {
        return c = multiplication(a, b);
    } else if (operatorValue == '/') {
        return c = division(a, b);
    }
}

function displayValues(a, b, c, buttonHTML) {
    if (a == "" && c == "") {
        displayId.innerHTML += buttonHTML;
    } else if (b == "" && c == "") {
        displayId.innerHTML += buttonHTML;
    } else if (a !== "" && b !== "" && c !== "") {
        displayId.innterHTML = c;
    }
}

function clearValues() {
    a = "";
    b = "";
    c = "";
    operatorValue = "";
    displayId.innerHTML = "";
}

// declutter the display for readability while displaying calculated value
function resetDisplay() {
    if (operatorValue == "=") {
        displayId.innerHTML = c;
    } else {
        a = "";
        b = "";
        displayId.innerHTML = c + operatorValue;
    }
}

//variable declaration
let a = "";
let b = "";
let c = "";
let operatorValue = "";
let displayHTML = "";

//get Id and Classes
var calculator = document.getElementById("calculator");
let displayId = document.getElementById("displayText");
const numberValue = document.querySelectorAll(".numberButton");

calculator.addEventListener("click", (event) => {
    const isbutton = event.target.nodeName === "BUTTON";
    var buttonClass = event.target.className;
    //only when a button is pressed display the button html
    if (!isbutton) {
        return;
    } else {
        //display first and second nunber and update the display to calculated number
        //and operator after the second operator is pressed for less clutter
        let buttonHTML = event.target.innerHTML;
        
        if (buttonHTML == "C") {
            clearValues();
        } else if (buttonHTML == "0" && operatorValue == "/") {
            alert("Error dividing my zero");
        } else if (buttonClass == "operatorButton" && operatorValue == "" && a == "") {
            clearValues();
        } else if (buttonClass == "operatorButton" && operatorValue == "" && c == "") {
            operatorValue = buttonHTML;
            displayId.innerHTML += buttonHTML;
        } else if (buttonClass == "operatorButton" && operatorValue !== "" && c == "") {
            operate(a, b, operatorValue);
            operatorValue = buttonHTML;
            displayValues(a, b, c, buttonHTML); 
            resetDisplay(a, b, c, operatorValue);
        } else if (buttonClass == "operatorButton" && operatorValue !== "" && b !== "" && c !== "") {
            operate(c, b, operatorValue);
            operatorValue = buttonHTML;
            displayValues(a, b, c, buttonHTML); 
            resetDisplay(a, b, c, operatorValue);
        } else if (buttonClass == "numberButton" && operatorValue == "") {
            a += buttonHTML;
            displayId.innerHTML += buttonHTML;
        } else if (buttonClass == "numberButton" && operatorValue !== "") {
            //reset b before this
            b += buttonHTML;
            displayId.innerHTML += buttonHTML;
        }
    }
})
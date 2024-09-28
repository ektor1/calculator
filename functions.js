// Calculator functions
function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function calculate(operation, num1, num2)
{
    return operation(num1, num2);
}


let firstNumber, secondNumber;
let operator;
let upperDisplayText = document.getElementById("upperDisplay");
let lowerDisplayText = document.getElementById("lowerDisplay");

function appendToDisplay(input)
{
    lowerDisplayText.innerText += input;
}

function clearDisplay()
{
    lowerDisplayText.innerText = "";
}

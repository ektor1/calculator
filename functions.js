// Calculator functions
let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
let calculate = (operator, firstNumber, secondNumber) => operator(parseInt(firstNumber), parseInt(secondNumber));


// Map operator signs to functions
let map = {};
map['+'] = add;
map['-'] = subtract;
map['x'] = multiply;
map['/'] = divide;


// Create variables for calculation
let firstNumber, secondNumber, round;
let operator;
const upperDisplayText = document.getElementById("upperDisplay");
const lowerDisplayText = document.getElementById("lowerDisplay");


// Append single digit in the lower display
function appendDigit(input)
{
    lowerDisplayText.innerText += input;
}


// Append first number and operation selected to the upper display
function appendOperator(operatorInput)
{
    firstNumber = lowerDisplayText.innerText;
    operator = operatorInput;
    upperDisplayText.innerText = lowerDisplayText.innerText + " " + operator;
    lowerDisplayText.innerText = "";
}


// Append second number to the upper display and show result of calculation on the lower display
function equals()
{
    secondNumber = lowerDisplayText.innerText;
    upperDisplayText.innerText += " " + lowerDisplayText.innerText;

    lowerDisplayText.innerText = calculate(map[operator], firstNumber, secondNumber);
    
}


function clearDisplay()
{
    upperDisplayText.innerText = "";
    lowerDisplayText.innerText = "";
    operator = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
}


function switchPercentage()
{
    lowerDisplayText.innerText = (lowerDisplayText.innerText / 100).toString();
}


function switchSign()
{
    lowerDisplayText.innerText = (-lowerDisplayText.innerText).toString();
}

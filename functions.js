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
let firstNumber, operator, secondNumber, round = 0;
let upperDisplayArr = [];
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
    upperDisplayArr.push(firstNumber, operatorInput);
    operator = upperDisplayArr[1];
    upperDisplayText.innerText = firstNumber + " " + operator;
    lowerDisplayText.innerText = "";
}


// Append second number to the upper display and show result of calculation on the lower display
function equals()
{
    if (round == 0)
    {
        secondNumber = lowerDisplayText.innerText;
        upperDisplayArr.push(secondNumber);
        upperDisplayText.innerText += " " + secondNumber;

        lowerDisplayText.innerText = calculate(map[operator], firstNumber, secondNumber);
        round += 1;
    } else 
    {
        upperDisplayArr.splice(0, 1, lowerDisplayText.innerText); // replace first item of array with result
        upperDisplayText.innerText = upperDisplayArr[0] + " " + upperDisplayArr[1] + " " + upperDisplayArr[2];
        firstNumber = upperDisplayArr[0];
        lowerDisplayText.innerText = calculate(map[operator], firstNumber, secondNumber);
    }
    
}


function clearDisplay()
{
    upperDisplayText.innerText = "";
    lowerDisplayText.innerText = "";
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    round = 0;
}


function switchPercentage()
{
    lowerDisplayText.innerText = (lowerDisplayText.innerText / 100).toString();
}


function switchSign()
{
    lowerDisplayText.innerText = (-lowerDisplayText.innerText).toString();
}

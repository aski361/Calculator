const add = function(a, b) {
    return a + b;
}
    
const substract = function(a, b) {
    return a - b;
}
    
const multiply = function(a, b) {
    return a * b;
}
    
const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, firstNumber, secondNumber) {
    return operator == ' + ' ? add(Number(firstNumber), Number(secondNumber)):
    operator == ' - ' ? substract(Number(firstNumber), Number(secondNumber)) :
    operator == ' * ' ? multiply(Number(firstNumber), Number(secondNumber)) :
    operator == ' / ' ? divide(Number(firstNumber), Number(secondNumber)) : 'Podano zły operator'
}

function appendNumber(number) {
    if (currentOperation.innerHTML === '0' || shouldScreenReset) resetScreen();
    currentOperation.textContent += number;
}

function resetScreen() {
    currentOperation.textContent = '';
    shouldScreenReset = false;
}

function roundAnswer(wynik) {
    return Math.round(wynik*1000)/1000;
}

function clearFunction() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    shouldScreenReset = false;
    currentOperation.textContent = '0';
    operation.textContent = '';
}


    
let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldScreenReset = false;

const numberButtons = document.querySelectorAll('.number');
const operand = document.querySelectorAll('.operand');
const operation = document.querySelector('.operation');
const currentOperation = document.querySelector('.result')
const clear = document.querySelector('#clear');
const dlt = document.querySelector('.delete')
const equal = document.querySelector('#equal');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerHTML);
    })
})

operand.forEach(button => {
    button.addEventListener('click', () => {
        setOperation(button.innerHTML)
    })
})

clear.addEventListener('click', clearFunction)

function setOperation(operator) {
    if (currentOperator !== null) eval();
    firstNumber = currentOperation.textContent;
    currentOperator = operator;
    operation.textContent = `${firstNumber} ${operator}`;
    shouldScreenReset = true;
}

function eval() {
    if(currentOperator === null || shouldScreenReset) return;
    secondNumber = currentOperation.textContent;
    currentOperation.textContent = roundAnswer(operate(currentOperator,firstNumber,secondNumber));
    operation.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`
    currentOperator = null;
}




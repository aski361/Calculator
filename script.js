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

function setOperation(operator) {
    if (currentOperator !== null) eval();
    firstNumber = currentOperation.textContent;
    currentOperator = operator;
    operation.textContent = `${firstNumber} ${operator}`;
    shouldScreenReset = true;
}

function eval() {
    if(currentOperator === null || shouldScreenReset) return;
    if(firstNumber === '0') {return currentOperation.textContent = 'Nie mozna dzielic 0'}
    secondNumber = currentOperation.textContent;
    currentOperation.textContent = roundAnswer(operate(currentOperator,firstNumber,secondNumber));
    operation.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`
    currentOperator = null;
    shouldScreenReset = true;
}

function deleteFunction() {
    currentOperation.textContent = currentOperation.textContent.toString().slice(0,-1)
}

function appendPoint() {
    if(currentOperation.textContent.indexOf('.') === -1)
    return currentOperation.textContent += '.'
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
const dlt = document.querySelector('#delete')
const equal = document.querySelector('#equal');
const dot = document.querySelector('.dot')

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

dlt.addEventListener('click', deleteFunction)

equal.addEventListener('click', eval)

dot.addEventListener('click', appendPoint)




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
    
let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldScreenReset = false;


    
const operate = function(operator, firstNumber, secondNumber) {
    return operator == ' + ' ? add(Number(firstNumber), Number(secondNumber)):
    operator == ' - ' ? substract(firstNumber, secondNumber) :
    operator == ' * ' ? multiply(firstNumber, secondNumber) :
    operator == ' / ' ? divide(firstNumber, secondNumber) : 'Podano zły operator'
}

const numberButtons = document.querySelectorAll('.number');
const operation = document.querySelector('.operation');
const operand = document.querySelectorAll('.operand');
const currentOperation = document.querySelector('.result')
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');


numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.innerHTML))
})

function appendNumber(number) {
    if(currentOperation.textContent === '0' || shouldScreenReset) resetScreen()
    currentOperation.textContent += number;
}

function resetScreen() {
    currentOperation.textContent = ''
    shouldScreenReset = false;
}


operand.forEach(button => {
    button.addEventListener('click', () => {
        setOperation(button.innerHTML);
    })
})

function setOperation(operator) {
    if(currentOperation !== null) evaluate();
    firstNumber = currentOperation.textContent;
    currentOperator = operator;
    operation.textContent = `${firstNumber} ${operator}`;
    shouldScreenReset = true;
}

function evaluate() {
    if (currentOperator === null || shouldScreenReset) return
    secondNumber = currentOperation.innerHTML
    currentOperation.textContent = operate(currentOperator,firstNumber,secondNumber);
    operation.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
    currentOperator = null;
}


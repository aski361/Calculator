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
    
let firstNumber;
let operator;
let secondNumber;
let display = '';
    
const operate = function(operator, firstNumber, secondNumber) {
    return operator === '+' ? add(firstNumber, secondNumber) :
    operator == '-' ? substract(firstNumber, secondNumber) :
    operator == '*' ? multiply(firstNumber, secondNumber) :
    operator == '/' ? divide(firstNumber, secondNumber) : 'Podano zły operator'
}

const numberButtons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const operand = document.querySelector('.operand');
const operation = document.querySelector('.operation');
const result = document.querySelector('.result')

operand.addEventListener('click',operandAction);
function operandAction() {
    if(operand.innerHTML == '÷') {
    }
}

equal.addEventListener('click',equals);
function equals() {
}

clear.addEventListener('click',clearScreen)

function clearScreen() {
    if(clear.innerHTML == 'CLEAR') {
        operation.textContent = '0'
        display = ''
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display += button.innerHTML
        operation.textContent = display;
    })
})



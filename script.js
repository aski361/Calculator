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
let operator = '';
let secondNumber = '';
let upperDisplay = '';
let downDisplay = '';
let result = '';

    
const operate = function(operator, firstNumber, secondNumber) {
    return operator == ' + ' ? add(Number(firstNumber), Number(secondNumber)):
    operator == '-' ? substract(firstNumber, secondNumber) :
    operator == '*' ? multiply(firstNumber, secondNumber) :
    operator == '/' ? divide(firstNumber, secondNumber) : 'Podano zły operator'
}

const numberButtons = document.querySelectorAll('.number');
const operation = document.querySelector('.operation');
const operand = document.querySelectorAll('.operand');
const resultDiv = document.querySelector('.result')
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    resultDiv.textContent = '0';
    operation.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    upperDisplay = '';
    downDisplay = '';
    result = '';
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        
    })
})

operand.forEach(button => {
    button.addEventListener('click', () => {
        
    })
})









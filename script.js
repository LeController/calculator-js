let display = document.querySelector('#screen')
let one = document.querySelector('#1')







function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    return operator(a,b);
};

console.log(operate(subtract, 5, 7))
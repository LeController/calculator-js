const display = document.querySelector('#screen');
const decimal = document.querySelector('#decimal')
let currentNumber = ''


one.addEventListener('click', updateDisplay.bind(null,'1'));
two.addEventListener('click', updateDisplay.bind(null,'2'));
three.addEventListener('click', updateDisplay.bind(null,'3'));
four.addEventListener('click', updateDisplay.bind(null, '4'));
five.addEventListener('click', updateDisplay.bind(null, '5'));
six.addEventListener('click', updateDisplay.bind(null, '6'));
seven.addEventListener('click', updateDisplay.bind(null, '7'));
eight.addEventListener('click', updateDisplay.bind(null, '8'));
nine.addEventListener('click', updateDisplay.bind(null, '9'));
zero.addEventListener('click', updateDisplay.bind(null, '0'));

decimal.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        updateDisplay('.')
    }
});


backspace.addEventListener('click', () => {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

clear.addEventListener('click', () => {
    currentNumber = '';
    display.textContent = '';
});


function updateDisplay(numberToDisplay) {
    currentNumber += numberToDisplay;
    display.textContent += numberToDisplay;
};

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
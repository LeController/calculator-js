const display = document.querySelector('#screen');
let currentNumber = '';
let operator = '';
let lastNumber;
let answer; 

one.addEventListener('click', updateDisplay.bind(null, '1'));
two.addEventListener('click', updateDisplay.bind(null, '2'));
three.addEventListener('click', updateDisplay.bind(null, '3'));
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
    lastNumber = '';
    operator = '';
    display.textContent = '';
});

adder.addEventListener('click', () => {
    lastNumber = +currentNumber;
    operator = '+';
    currentNumber = '';
    display.textContent = '';
});

subtracter.addEventListener('click', () => {
    lastNumber = +currentNumber;
    operator = '-';
    currentNumber = '';
    display.textContent = '';
});

multiplyer.addEventListener('click', () => {
    lastNumber = +currentNumber;
    operator = '*';
    currentNumber = '';
    display.textContent = '';
});

divider.addEventListener('click', () => {
    lastNumber = +currentNumber;
    operator = '/';
    currentNumber = '';
    display.textContent = '';
});

equals.addEventListener('click', () => {
    if (operator === '+') {
        answer = add(+lastNumber, +currentNumber)
        currentNumber = answer
        display.textContent = answer;
    } else if (operator === '-') {
        answer = subtract(+lastNumber, +currentNumber)
        currentNumber = answer
        display.textContent = answer;
    } else if (operator === '*') {
        answer = multiply(+lastNumber, +currentNumber)
        currentNumber = answer
        display.textContent = answer;
    } else if (operator === '/') {
        answer = divide(+lastNumber, +currentNumber)
        currentNumber = answer
        display.textContent = answer;
    } 
})

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
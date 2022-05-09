const display = document.querySelector('#screen');

let currentNumber = ''

one.addEventListener('click', () => {
    updateDisplay(display, '1')
});

two.addEventListener('click', () => {
    updateDisplay(display, '2')
});

three.addEventListener('click', () => {
    updateDisplay(display, '3')
});

four.addEventListener('click', () => {
    updateDisplay(display, '4')
});

five.addEventListener('click', () => {
    updateDisplay(display, '5')
});

six.addEventListener('click', () => {
    updateDisplay(display, '6')
});

seven.addEventListener('click', () => {
    updateDisplay(display, '7')
});

eight.addEventListener('click', () => {
    updateDisplay(display, '8')
});

nine.addEventListener('click', () => {
    updateDisplay(display, '9')
});

zero.addEventListener('click', () => {
    updateDisplay(display, '0')
});

decimal.addEventListener('click', () => {
    updateDisplay(display, '.');
    removeEventListener('click', );
});

backspace.addEventListener('click', () => {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

clear.addEventListener('click', () => {
    currentNumber = '';
    display.textContent = '';
});




function updateDisplay(display, numberToDisplay) {
    currentNumber += numberToDisplay;
    display.textContent += numberToDisplay;
}

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
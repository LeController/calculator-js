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

window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`div[key="${e.key}"]`)
    // console.log(e);
    key.classList.add("pressed");
    // check if decimal is already present in display
    if (e.key === '.') {
        if (!display.textContent.includes('.')) {
            updateDisplay(e.key)
        }
    // check if key pressed is backspace
    } else if (e.key === 'Backspace') {
        currentNumber = currentNumber.substring(0, currentNumber.length - 1);
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    } else {
        updateDisplay(e.key);
    }
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("pressed");
}

const keyNums = document.querySelectorAll('.key');
keyNums.forEach(keyNum => keyNum.addEventListener('transitionend', removeTransition));


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
    answer = '';
    display.textContent = '';
});

adder.addEventListener('click', () => {
    if (operator === '') {
        lastNumber = +currentNumber;
        operator = '+';
        currentNumber = '';
        display.textContent = '';
    }
});

subtracter.addEventListener('click', () => {
    if (operator === '') {
        lastNumber = +currentNumber;
        operator = '-';
        currentNumber = '';
        display.textContent = '';
    }
});

multiplyer.addEventListener('click', () => {
    if (operator === '') {
        lastNumber = +currentNumber;
        operator = '*';
        currentNumber = '';
        display.textContent = '';
    }
});

divider.addEventListener('click', () => {
    if (operator === '') {
        lastNumber = +currentNumber;
        operator = '/';
        currentNumber = '';
        display.textContent = '';
    }
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
        if (currentNumber === '0') {
            display.textContent = 'wow you broke math';
        } else {
            answer = divide(+lastNumber, +currentNumber);
            answer = Math.round(answer * 10000) / 10000;
            currentNumber = answer;
            display.textContent = answer;
        }
    } 
    operator = ''
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
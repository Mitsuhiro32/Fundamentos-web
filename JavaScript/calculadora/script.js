const DISPLAY = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';

function press(num) {
    num1 += num;
    DISPLAY.innerHTML = num1;
}

function setOP(op) {
    operator = op;
    switch (operator) {
        case '+':
            if (DISPLAY.innerHTML.includes('+')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('+', '+');
            } else if (DISPLAY.innerHTML.includes('-')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('-', '+');
            } else if (DISPLAY.innerHTML.includes('*')){
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('*', '+');
            } else if (DISPLAY.innerHTML.includes('/')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('/', '+');
            } else {
                DISPLAY.innerHTML = '+';
            }
            break;
        case '-':
            if (DISPLAY.innerHTML.includes('+')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('+', '-');
            } else if (DISPLAY.innerHTML.includes('-')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('-', '-');
            }else if (DISPLAY.innerHTML.includes('*')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('*', '-');
            } else if (DISPLAY.innerHTML.includes('/')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('/', '-');
            } else {
                DISPLAY.innerHTML = '-';
            }
            break;
        case '*':
            if (DISPLAY.innerHTML.includes('+')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('+', '*');
            } else if (DISPLAY.innerHTML.includes('-')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('-', '*');
            } else if (DISPLAY.innerHTML.includes('*')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('*', '*');
            } else if (DISPLAY.innerHTML.includes('/')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('/', '*');
            } else {
                DISPLAY.innerHTML = '*';
            }
            break;
        case '/':
            if (DISPLAY.innerHTML.includes('+')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('+', '/');
            } else if (DISPLAY.innerHTML.includes('-')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('-', '/');
            } else if (DISPLAY.innerHTML.includes('*')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('*', '/');
            } else if (DISPLAY.innerHTML.includes('/')) {
                DISPLAY.innerHTML = DISPLAY.innerHTML.replace('/', '/');
            } else {
                DISPLAY.innerHTML = '/';
            }
            break;
    }
    num2 = num1;
    num1 = '';
}

function clr() {
    num1 = '';
    num2 = '';
    operator = '';
    DISPLAY.innerHTML = '0';
}

function calculate() {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(num2) + parseFloat(num1);
            break;
        case '-':
            result = parseFloat(num2) - parseFloat(num1);
            break;
        case '*':
            result = parseFloat(num2) * parseFloat(num1);
            break;
        case '/':
            result = parseFloat(num2) / parseFloat(num1);
            break;
    }
    DISPLAY.innerHTML = result;
    num1 = result;
    num2 = '';
    operator = '';
}
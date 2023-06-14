function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function maltiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(operator, num1, num2) {
    switch (operator) {
        case '+';
            return add(num1, num2);
        
        case '-';
            return subtract(num1, num2);

        case '*';
            return maltiply(num1, num2);
        
        case '/';
            return divide(num1, num2);
        
        default:
            return "Invalid operator";

    }
}

const operator = '+';
const number1 = 10;
const number2 = 5;

const result = calculate(operator, number1, number2);
console.log('result: ${result'});
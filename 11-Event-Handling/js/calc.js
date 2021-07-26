"use strict";

const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");

const result = document.querySelector("#result");

const buttons = document.querySelectorAll("div#calculator > button");

const output = document.querySelector("#history");

const calculate = (e) => {
    const operator = e.target.innerText;

    switch (operator) {
        case 'C':
            number1.value = "0";
            number2.value = "0";
            result.value = "0";
            return;
        case '+':
            result.value = Number.parseFloat(number1.value) + Number.parseFloat(number2.value);
            break;
        case '-':
            result.value = Number.parseFloat(number1.value) - Number.parseFloat(number2.value);
            break;
        case '*':
            result.value = Number.parseFloat(number1.value) * Number.parseFloat(number2.value);
            break;
        case '/':
            result.value = Number.parseFloat(number1.value) / Number.parseFloat(number2.value);
            break;
    }
    writeHistory(number1.value, operator, number2.value, result.value);
}

// listens for a 'click' event on each button -> calling the calculate function when triggered
buttons.forEach(button => button.addEventListener('click', calculate));

const writeHistory = (num1, op, num2, result) => {
    const newHistory = document.createElement('p');
    newHistory.textContent = `${num1} ${op} ${num2} = ${result}`;

    output.appendChild(newHistory);
}
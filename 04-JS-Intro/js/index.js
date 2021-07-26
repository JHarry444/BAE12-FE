'use strict'; // put that in every JS file

// a = 37; // missing let or const
// console.log('A: ', a); // error in ECMAScript but it only shows in the browser

// debugger; stops code execution so you can step through it line-by-line

console.log("Hello, ");
console.log("World");
console.log("!");

// variable declaration
let i = 12;

console.log(i);
i = true;

console.log(i);
i =['a', 'b', 'c'];

console.log(i);
i = 44.94;
console.log(i);

// constant variable
const c = 42;

// c = 74; ERROR    

typeof 21;
typeof 'hello';
typeof {}
typeof true;

function add() { // creates the 'add' function in the global namespace (accessible anywhere)
    console.log("ADD");
}

function add(a, b) {
    console.log("NEW ADD");
    return a + b;
}

function print(a) {
    console.log(a);
}
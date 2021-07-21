

let a = 12 // automatically inserts a ; to prevent lines running together
let b = 24;

function asi() {
    return // insert a ; directly after a return
    'hello';
}

for (let i =0; i < 10; i++) {
    console.log(i);
}

const run = true;
while (run) {
    console.log("While true");
    break;
}

const runAgain = false;
do {
    console.log("I always run once");
} while (runAgain);

if (1 + 1 == 2) {
    console.log("Maths");
} else {
    console.log("Maffs");
}

const today = new Date();

switch(today.getDay()) {
    case 1:
        console.log("It is Monday, my dudes.");
        break;
    case 2:
        console.log("It is Tuesday, my dudes.");
        break;
    case 3:
        console.log("It is Wednesday, my dudes.");
        break;
    case 4:
        console.log("It is Thursday, my dudes.");
        break;
    case 5:
        console.log("It is Friday, my dudes.");
        break;
    case 6:
        console.log("It is Saturday, my dudes.");
        break;
    case 7:
        console.log("It is Sunday, my dudes.");
        break;
    default:
        console.log("I haven't known what day it was since Covid started");
}

// == doesn't care about type
if (1 == "1") {
    console.log("EQUALITY");
} else {
    console.log("NO EQUALITY");
}
// === cares about type
if (1 === "1") {
    console.log("TRUE EQUALITY");
} else {
    console.log("not TRUE EQUALITY");
}

if (true) {
    console.log(27);
}

if (false){
    console.log("False is truthy?");
} else if (0) {
    console.log("Zero is truthy?");
} else if (null) {
    console.log("Null is truthy?");
} else if (undefined) {
    console.log("Undefined is truthy?");
} else if (NaN) {
    console.log("NaN is truthy?");
} else if ("") {
    console.log("'' is truthy?");
} else {
    console.log("None of these are truthy!");
}

function print(p) {
    if (p) {
            console.log(p);
    } else {
        console.log("Invalid paramter passed to print()");
    }
}

const myName = 'JH';

console.log("Hello, my name is " + myName + "!"); // concatenation

console.log(`Hello, my name is ${myName}!`); // template literal

// 27 -> number literal
// 'jh' -> string literal

function isEven(num) {
    // if (num % 2 === 0) {
    //     console.log("Even");
    // } else {
    //     console.log("Odd");
    // }
    console.log(num % 2 === 0 ? "Even" : "Odd");
}
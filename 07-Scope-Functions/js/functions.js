

function add(a, b) {
    return a + b;
}

const minus = function(a, b) {
    return a - b;
}

// no { } then it implicitly returns
const multiply = (a, b) => a * b;

function oldSchoolMultiply(a, b) {
    return a * b;
}

const print = a => {
    console.log(a);
}

function oldSchoolPrint(a) {
    console.log(a);
}
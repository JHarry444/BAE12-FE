"use strict";

const hello = () => {
    console.log("Hello, World!")
}

const call = (func) => {
    console.log("Calling: ", func);
    func();
}


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const print = function (thing) {
    console.log(thing);
}

nums.forEach(print);

nums.forEach(num => print(num + 1));

const isEven = num => num % 2 === 0;

isEven(22)

isEven(1)

nums.filter(isEven);

const evenNums = nums.filter(isEven);

const oddNums = nums.filter(num => num % 2 === 1);


const sumFunc = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const sum = (sumSoFar, next) => {
    console.log("SUM: ", sumSoFar);
    console.log("NEXT: ", next);
    return sumSoFar + next;
}

nums.reduce(sum);

const people = [
    {
        name: "JH",
        age: 27
    },
    {
        name: "JB",
        age: 24
    }
];

// setting initial value as 0 otherwise it'd be the first element in the array
people.reduce((totalAge, nextPerson) => totalAge + nextPerson.age, 0); 
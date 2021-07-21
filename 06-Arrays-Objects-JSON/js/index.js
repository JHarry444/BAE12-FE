"use strict";

const arr = [12, 45, true, {}, ['a', 'b', 'c']];

console.log(arr);

arr[5] = "bloop";
console.log(arr);

arr.push("bloop 2");

console.log(arr);

arr.pop();

console.log(arr);

const me = {
    name: "JH",
    age: 27,
    jobTitle: "Trainer"
}

console.log(me);

const meAsJSONString = JSON.stringify(me);

console.log(meAsJSONString);

const me2 = JSON.parse(meAsJSONString);

console.log(me2);
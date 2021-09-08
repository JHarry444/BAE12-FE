"use strict";

console.log("Hello, World!");

const myInput = document.querySelector("#myInput");
const myInput2 = document.querySelector("#myInput2");

// setting a function to trigger when you type into the left input
myInput.addEventListener("input", (e) => {
    // get value from input that triggered the function (left)
    const currentVal = e.target.value;
    // set value of 2nd input (right) equal to the value from the 1st input
    myInput2.value = currentVal ;
});


myInput2.addEventListener("input", (e) => {
    myInput.value = e.target.value;
});

const output = document.querySelector("#output");

axios
    .get("https://swapi.dev/api/starships/")
    .then(res => {
        console.log(res);
        const ships = res.data.results;
        for (let i = 0; i < ships.length; i++) {
            const ship = ships[i];

            const newParagraph = document.createElement("p"); // make new <p>
            // newParagraph.innerText = "Name: " + ship.name; // set text content
            newParagraph.innerText = `Name: ${ship.name}`; // same as previous but with added TEMPLATE LITERALS
            output.appendChild(newParagraph); // write to page
        }
    })
    .catch(err => console.error(err));
console.log("HELLO! I AM AFTER THE REQUEST IS SENT!");

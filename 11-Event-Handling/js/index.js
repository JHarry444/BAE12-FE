"use strict";

const title = document.querySelector("body > h1");

title.innerHTML = "My Title";


const hello = () => alert("Wat up");

const count = document.querySelector("#count");

const modifyCount = (event) => {
    console.log(event);
    console.log(event.target);

    console.log("VAL: ", event.target.innerText);

    const modifier = event.target.innerText;

    if (modifier === "Reset") {
        count.value = 0;
        return;
    }

    count.value = Number.parseInt(count.value) + Number.parseInt(modifier);
}

const output = document.querySelector("#output");

const copyText = e => {
    const currentVal = e.target.value;
    console.log(e);
    output.value = currentVal;
}

const miles = document.querySelector("#miles");

const kms = document.querySelector("#kms");

const convertMiles = () => {
    if (!miles.value) miles.value = "0";
    kms.value = Number.parseFloat(miles.value) * 1.6;
}

const convertKMs = () => {
    if(!kms.value) kms.value = "0";
    miles.value = Number.parseFloat(kms.value) / 1.6;
}
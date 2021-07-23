"use strict";

const baseURL = "http://localhost:8080";

axios.get(`${baseURL}/`)
    .then(res => { // handle response with callback
        console.log(res);
        console.log("DATA: ", res.data);
    }).catch(err => console.log(err)); // handle error


console.log("Have we got a response yet?");

const getAllSection = document.querySelector("#getAllSection");

axios.get(`${baseURL}/getAllKittens`)
    .then(res => {
        const kittens = res.data;

        kittens.forEach(kitten => renderKitten(kitten));
    }).catch(err => console.log(err));


const renderKitten = (kitten) => {
    const newKitten = document.createElement('p');

    newKitten.textContent = JSON.stringify(kitten);

    getAllSection.appendChild(newKitten);
}
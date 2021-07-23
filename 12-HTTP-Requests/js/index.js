"use strict";

const baseURL = "http://localhost:8080";

axios.get(`${baseURL}/`)
    .then(res => { // handle response with callback
        console.log(res);
        console.log("DATA: ", res.data);
    }).catch(err => console.log(err)); // handle error


console.log("Have we got a response yet?");

const getAllOutput = document.querySelector("#getAllOutput");
const getByIdOutput = document.querySelector("#getByIdOutput");

const kittenId = document.querySelector("#kittenId");

axios.get(`${baseURL}/getAllKittens`)
    .then(res => {
        const kittens = res.data;

        getAllOutput.innerHTML = ""; // blanks an element

        kittens.forEach(kitten => renderKitten(kitten, getAllOutput));
    }).catch(err => console.log(err));


const renderKitten = (kitten, outputDiv) => {
    const newKitten = document.createElement('div');

    const kittenName = document.createElement("h3");
    kittenName.innerText = kitten.name;
    newKitten.appendChild(kittenName);

    const kittenAge = document.createElement("p");
    kittenAge.innerText = `Age: ${kitten.age}`;
    newKitten.appendChild(kittenAge);

    const kittenBreed = document.createElement("p");
    kittenBreed.innerText = `Breed: ${kitten.breed}`; 
    newKitten.appendChild(kittenBreed);

    outputDiv.appendChild(newKitten);
}

const getKittenById = () => {
    axios.get(`${baseURL}/getKitten/${kittenId.value}`)
    .then(res => {
        const kitten = res.data;
        getByIdOutput.innerHTML = "";
        renderKitten(kitten, getByIdOutput);
    }).catch(err => console.log(err));
}

document.querySelector("section#getByIdSection > button").addEventListener('click', getKittenById);
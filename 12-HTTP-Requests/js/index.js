"use strict";

(function() {
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

const getAllKittens = () => {
    axios.get(`${baseURL}/getAllKittens`)
    .then(res => {
        const kittens = res.data;

        getAllOutput.innerHTML = ""; // blanks an element

        kittens.forEach(kitten => renderKitten(kitten, getAllOutput));
    }).catch(err => console.log(err));
}

const renderKitten = (kitten, outputDiv) => {   
    const kittenColumn = document.createElement('div');
    kittenColumn.classList.add("col");

    const kittenCard = document.createElement('div');
    kittenCard.classList.add("card");
    kittenColumn.appendChild(kittenCard);

    const newKitten = document.createElement('div');
    newKitten.classList.add("card-body");
    
    const kittenName = document.createElement("h3");
    kittenName.innerText = kitten.name;
    kittenName.classList.add("card-title");
    newKitten.appendChild(kittenName);


    const kittenAge = document.createElement("p");
    kittenAge.innerText = `Age: ${kitten.age}`;
    kittenAge.classList.add("card-text");
    newKitten.appendChild(kittenAge);

    const kittenBreed = document.createElement("p");
    kittenBreed.innerText = `Breed: ${kitten.breed}`; 
    kittenBreed.classList.add("card-text");
    newKitten.appendChild(kittenBreed);

    const kittenCuteness = document.createElement("p");
    kittenCuteness.innerText = `Cuteness: ${kitten.cuteness}`; 
    kittenCuteness.classList.add("card-text");
    newKitten.appendChild(kittenCuteness);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "DELETE";
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.addEventListener('click', () => deleteKitten(kitten.id));

    newKitten.appendChild(deleteButton);

    kittenCard.appendChild(newKitten);

    outputDiv.appendChild(kittenColumn);
}

const deleteKitten = id => {
    axios.delete(`${baseURL}/deleteKitten/${id}`)
        .then(res => {
            console.log(res);
            getAllKittens();
        }).catch(err => console.log(err));
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

document.querySelector("section#postSection > form").addEventListener('submit', (e) => {
    e.preventDefault(); // stops the form submitting in the default way

    const form = e.target;

    const data = {
        name: form.name.value,
        breed: form.breed.value,
        age: form.age.value,
        cuteness: form.cuteness.value
    }

    console.log("DATA: ", data);

    axios.post(`${baseURL}/createKitten`, data)
    .then((res) => {
        console.log(res);
        getAllKittens();

        form.reset(); //resets form
        form.name.focus(); // selects the name input
    }).catch(err => console.log(err));
});

getAllKittens();

})();
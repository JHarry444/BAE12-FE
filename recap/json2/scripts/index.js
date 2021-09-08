"use strict";

const output = document.querySelector("#output");

let kings = [];

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
    .then(res => {
        const data = res.data;
        console.log(data);
        kings = res.data;
        renderKings();
    }).catch(err => console.error(err));


const renderKing = (king) => {
    const kingDiv = document.createElement("div");
    
    const kingName = document.createElement("h3");
    kingName.innerText = king.nm;
    kingDiv.appendChild(kingName);

    const country = document.createElement("p");
    country.innerText = `Country: ${king.cty}`;
    kingDiv.appendChild(country);

    const house = document.createElement("p");
    house.innerText = `House: ${king.hse}`;
    kingDiv.appendChild(house);

    const years = document.createElement("p");
    years.innerText = `Country: ${king.yrs}`;
    kingDiv.appendChild(years);

    return kingDiv;
}

const renderKings = (search) => {
    output.innerHTML = "";
    for (let i = 0; i < kings.length; i++) {
        if (search && !kings[i].nm.toLowerCase().startsWith(search)) continue;
        const king = renderKing(kings[i]);
        output.appendChild(king);
    }
}

document.querySelector("#search").addEventListener("input", e => renderKings(e.target.value));
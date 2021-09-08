"use strict";

const output = document.querySelector("#output");

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(res => {
        const data = res.data;
        console.log(data);

        const squadName = document.createElement("h1");
        squadName.innerText = data.squadName;
        output.appendChild(squadName);
        const homeTown = document.createElement("p");
        homeTown.innerText = `HomeTown: ${data.homeTown}`;
        output.appendChild(homeTown);
        const formed = document.createElement("p");
        formed.innerText = `Formed: ${data.formed}`;
        output.appendChild(formed);

        const members = document.createElement("section");
        members.classList.add("membersList");
        const memTitle = document.createElement("h2");
        memTitle.innerText = "Members:";
        output.appendChild(memTitle);
        output.appendChild(members);

        for (let i = 0; i < data.members.length; i++) {
            const squadMember = renderSquadMember(data.members[i]);
            members.appendChild(squadMember);
        }
    }).catch(err => console.error(err));


const renderSquadMember = (squadMember) => {
    const memberDiv = document.createElement("div");
    
    const memberName = document.createElement("h3");
    memberName.innerText = squadMember.name;
    memberDiv.appendChild(memberName);

    const powersTitle = document.createElement("h4");
    powersTitle.innerText = "Powers:";
    memberDiv.appendChild(powersTitle);
    const powerSet = document.createElement("ol");
    for (let i = 0; i < squadMember.powers.length; i++) {
        const power = document.createElement("li");
        power.innerText = squadMember.powers[i];
        powerSet.appendChild(power);
    }

    memberDiv.appendChild(powerSet);
    return memberDiv;
}
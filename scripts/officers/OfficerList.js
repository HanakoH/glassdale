import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { OfficerHTML } from "./Officer.js"

export const OfficerList = () => {
    getOfficers()
    .then(()=>{
        const officerArray = useOfficers();
        addOfficersToDOM(officerArray);
    })
}

const addOfficersToDOM = (anOfficerArray) => {
    const domElement = document.querySelector(".officersContainer");

    let HTMLArray = anOfficerArray.map(singleOfficer => {
        return OfficerHTML(singleOfficer);
    })
    domElement.innerHTML = HTMLArray.join("");
}
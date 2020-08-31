import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { CriminalHTML } from "./Criminal.js"

export const CriminalList = () => {
    getCriminals()
    .then(()=>{
        const criminalArray = useCriminals();
        addCriminalsToDOM(criminalArray);
    })
}

const addCriminalsToDOM = (anCriminalArray) => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = anCriminalArray.map(singleCriminal => {
        return CriminalHTML(singleCriminal);
    })
    domElement.innerHTML = HTMLArray.join("");
}
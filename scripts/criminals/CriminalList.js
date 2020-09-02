import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { CriminalHTML } from "./Criminal.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        const matchingCriminals = useCriminals().filter(currentCriminal => {
            return currentCriminal.conviction === event.detail.crimeThatWasChosen
        })
       render(matchingCriminals)
    } else render(useCriminals());
})

export const CriminalList = () => {
    getCriminals()
    .then(()=>{
        const criminalArray = useCriminals();
        render(criminalArray);
    })
}


const render = criminalCollection => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = criminalCollection.map(singleCriminal => {
        return CriminalHTML(singleCriminal);
    })
    domElement.innerHTML = HTMLArray.join("");
}
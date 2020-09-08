import { useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector("#main")

eventHub.addEventListener("associatesClicked", event => {
    //display all associates for criminal

    const targetCriminal = useCriminals().find(criminal => {
        criminal.id === parseInt(event.detail.chosenCriminal)
    })

})
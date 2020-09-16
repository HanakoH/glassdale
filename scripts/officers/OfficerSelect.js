import { getOfficers, useOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const theChosenOfficer = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(theChosenOfficer)
    }
})

export const OfficerSelect = () => {
    getOfficers()
    .then(officersData => {
        const officerData = officersData;
        const fullOfficerData = useOfficers(officerData)
        const sortedArray = []
        fullOfficerData.map(officer => {
            sortedArray.push(officer.name)
        })
        const finalArray = sortedArray.sort()
    render(finalArray)
    })
}

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(officer => {
                return `<option value="${officer}">${officer}</option>`
                })
            }
        </select>
    `
}
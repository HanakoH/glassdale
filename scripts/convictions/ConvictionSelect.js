/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
    .then(convictionsData => {
        const convictData = convictionsData;
        const fullConvictData = useConvictions(convictData)
        const sortedArray = []
        fullConvictData.map(conviction => {
            sortedArray.push(conviction.name)
        })
        const finalArray = sortedArray.sort()
    render(finalArray)
    })
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const theChosenCrime = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(theChosenCrime)
    }
})

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crime => {
                return `<option value="${crime}">${crime}</option>`
                })
            }
        </select>
    `
}
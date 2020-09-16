import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { WitnessHTML } from "./Witness.js"

export const WitnessList = () => {
    getWitnesses()
    .then(() => {
        const witnessArray = useWitnesses()
        render(witnessArray)
    })
}

const render = witnessCollection => {
    //get a reference for where to put this
    const domElement = document.querySelector(".witnessContainer");
    //loop through the witnessCollection to make HTML
    let HTMLArray = witnessCollection.map(singleWitness => {
        return WitnessHTML(singleWitness);
    })
    domElement.innerHTML = HTMLArray.join("");
}
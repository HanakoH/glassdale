export const WitnessHTML = witnessObj => {
    return `
    <section id="witness-${witnessObj.id}" class="card-witness">
        <p>Name: ${witnessObj.name}</p>
        <p>Statement: ${witnessObj.statements}</p>
    </section>
    `
}
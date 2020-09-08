const eventHub = document.querySelector("#main")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")){
        const [prefix, criminalId] = event.targer.id.split("--")

        const alibiEvent = new CustomEvent("associatesCLicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent);
    }
})

export const CriminalHTML = (criminal) => {
    return `
    <section id="criminal-${criminal.id}" class="card-criminal">
         <h2>${criminal.name}</h2>
         <p>Age: ${criminal.age}</p>
         <p>Crime: ${criminal.conviction}</p>
         <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
         <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
         <button id="associates--${criminal.id}">Alibis</button>
     </section>
     `
 }
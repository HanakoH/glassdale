export const CriminalHTML = (criminal) => {
    return `
    <section id="criminal-${criminal.id}" class="card-criminal">
         <h2>${criminal.name}</h2>
         <p>Age: ${criminal.age}</p>
         <p>Crime: ${criminal.conviction}</p>
         <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
         <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
     </section>
     `
 }
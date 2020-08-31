export const OfficerHTML = (officer) => {
   return `
   <section id="officer-${officer.id}" class="card-officer">
        <h2>Name: ${officer.name}</h2>
    </section>
    `
}
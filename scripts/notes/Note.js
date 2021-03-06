export const NoteHTML = (noteObj) => {
    return `
    <section id="note-${noteObj.id}" class="card-note">
         <p>${noteObj.noteText}</p>
         <p>Criminal: ${noteObj.suspectObj.name}</p>
         <p>Date: ${new Date(noteObj.noteDate).toLocaleDateString('en-US')}</p>
         <button id="deleteNote--${noteObj.id}">Delete</button>
     </section>
     `
 }
 
import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTML } from "./Note.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", event => {  
    render(useNotes())
})

export const NoteList = () => {
    getNotes()
    .then(()=>{
        const noteArray = useNotes();
        render(noteArray);
    })
}

const render = noteCollection => {
    const domElement = document.querySelector(".notesContainer");

    let HTMLArray = noteCollection.map(singleNote => {
        return NoteHTML(singleNote);
    })
    domElement.innerHTML = HTMLArray.join("");
}
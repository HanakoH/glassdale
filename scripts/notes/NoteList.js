import { getNotes, useNotes, deleteNote } from "./NoteProvider.js";
import { NoteHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", event => {  
    render(useNotes(), useCriminals())
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})

const domElement = document.querySelector(".notesContainer");

const render = (noteArray, suspects) => {
    let HTMLArray = noteArray.map((singleNote) => {
        singleNote.suspectObj = suspects.find((suspect) => {
            return suspect.id === singleNote.suspectId
        })
        return NoteHTML(singleNote);
    })
    domElement.innerHTML = HTMLArray.join("");
}

export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const noteArray = useNotes();
        const suspects = useCriminals();
        render(noteArray, suspects);
    })
}
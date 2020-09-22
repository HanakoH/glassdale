import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", event => {  
    render(useNotes(), useCriminals())
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
import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", event => {  
    render(useNotes(), useCriminals())
})

const render = (noteArray, suspects) => {
    const domElement = document.querySelector(".notesContainer");

    let HTMLArray = noteArray.map(singleNote => {
        singleNote.suspectObj = suspects.find(suspect => {
            return suspect.id === parseInt(singleNote.suspectId)
        })
        debugger
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
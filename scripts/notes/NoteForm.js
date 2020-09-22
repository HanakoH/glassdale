import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()

        const noteContent = document.getElementById('noteForm-text')
        const noteDate = document.getElementById('note-date')
        const suspectId = document.getElementById('note-suspect')

        // Make a new object representation of a note
        if(suspectId.value !== "0"){
            const newNote = {
                noteText: noteContent.value,
                noteDate: noteDate.value,
                suspectId: parseInt(suspectId.value)
            }
        // Change API state and application state
        saveNote(newNote)
        .then(() => render(useCriminals()));
        }else {
            window.alert("Choose a Suspect");
        }
    }
})

const render = (criminalArray) => {
    contentTarget.innerHTML = `
        <form>
            Notes: <textarea id="noteForm-text" placeholder="Put a note here..."></textarea>
            Date: <input type="date" id="note-date"><br>
            Suspect: <select class="dropdown" id="note-suspect">
                     <option value="0">Please select a criminal...</option>
                        ${
                            criminalArray.map(criminal => {
                            return `<option value="${criminal.id}">${criminal.name}</option>`
                            })
                        }
                     </select>
            <button type="button" id="saveNote">Save Note</button>
        </form>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        render(useCriminals());
    })
}
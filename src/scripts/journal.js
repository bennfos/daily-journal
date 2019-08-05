const dateInput = document.getElementById("journalDate")
const conceptInput = document.getElementById("conceptsCovered")
const entryInput = document.getElementById("journalEntry")
const moodInput = document.getElementById("mood")
const button = document.getElementById("recordEntryButton")



import render from "./dom.js"
import API from "./data.js"
import factoryObject from "./factory.js"



// Invoke function to fetch and render entries 
API.getEntriesData()
.then(entries => {
        render.renderEntry(entries)
    })


button.addEventListener("click", (event) => {
    const newEntry = factoryObject.factory.makeEntryObject(dateInput.value, conceptInput.value, entryInput.value, moodInput.value)
    API.saveJournalEntry(newEntry)
        .then(() => { 
            API.getEntriesData()
            .then(entries => render.renderEntry(entries))
        })
})
    





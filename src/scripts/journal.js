const dateInput = document.getElementById("journalDate")
const conceptInput = document.getElementById("conceptsCovered")
const entryInput = document.getElementById("journalEntry")
const moodInput = document.getElementById("mood")
const button = document.getElementById("recordEntryButton")


// Define an array that will hold all types of journal entries
journalEntries = []

// Adds journal entry objects to entries array
const addEntry = (journalEntry) => {
    journalEntries.push(journalEntry);
}




// Invoke function to fetch and render entries 
API.getEntriesData()
.then(entries => {
        render.renderEntry(entries)
    })


button.addEventListener("click", (event) => {
    const newEntry = makeEntryObject(dateInput.value, conceptInput.value, entryInput.value, moodInput.value)
    API.saveJournalEntry(newEntry)
        .then(() => {
            API.getEntriesData()
            .then(entries => render.renderEntry(entries))
        })
})
    





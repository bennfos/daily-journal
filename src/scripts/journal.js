const button = document.getElementById("recordEntryButton");


// Define an array that will hold all types of journal entries
journalEntries = []

// Adds journal entry objects to entries array
const addEntry = (journalEntry) => {
    journalEntries.push(journalEntry);
}




// Invoke function to fetch and render entries 
API.getEntriesData()
.then(entries => {
    for (let entry of entries) {
        let entryHTML = factory.makeJournalEntryComponent(entry)
        render.renderEntry(entryHTML)
    }
})


button.addEventListener("click", (event) => {
   
})





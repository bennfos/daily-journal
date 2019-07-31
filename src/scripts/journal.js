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
    for (let entry of entries) {
        let entryHTML = factory.makeJournalEntryComponent(entry)
        render.renderEntry(entryHTML)
    }
})

const saveJournalEntry = (newEntry) => {
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "applicatino/json"
        },
        body: JSON.stringify(newEntry)
        }
    )
}


button.addEventListener("click", (event) => {
    const newEntry = makeEntryObject(dateInput.value, conceptInput.value, entryInput.value, moodInput.value)
    let newEntryHTML = factory.makeJournalEntryComponent(newEntry)
    console.log(newEntry)
    saveJournalEntry(newEntry)
        .then(API.getEntriesData())
        .then(render.renderEntry(newEntryHTML))
    // API.saveJournalEntry(newEntry)
    //     .then(API.getEntriesData())
    //     .then(entries => {
    //         for (let entry of entries) {
    //             let entryHTML = factory.makeJournalEntryComponent(entry)
    //             render.renderEntry(entryHTML)
    //         }
    //     })
    })
    





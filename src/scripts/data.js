//Fetch entries from API, then parse them to JSON, then make and render components to DOM


const API = {
    getEntriesData() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    saveJournalEntry(newEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    },
    deleteJournalEntry(entryId) {
        return fetch(`http://localhost:3000/entries/${entryId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    updateFormFields(entryId) {
        const hiddenEntryId = document.querySelector("#entryId")
        const dateInput = document.getElementById("journalDate")
        const conceptInput = document.getElementById("conceptsCovered")
        const entryInput = document.getElementById("journalEntry")
        const moodInput = document.getElementById("mood")
        return fetch(`http://localhost:3000/entries/${entryId}`)
        .then(response => response.json())
        .then(entry => {
            hiddenEntryId.value = entry.id
            dateInput.value = entry.date
            conceptInput.value = entry.concept
            entryInput.value = entry.entry
            moodInput.value = entry.mood
        })
    },
    editJournalEntry(entryId) {
        return fetch(`http://localhost:3000/entries/${entryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        .then(response => response.json(updatedObject))
        .then(() => {
            const hiddenEntryId = document.querySelector("#entryId")
            hiddenEntryId.value = ""
        })
    },
}

export default API
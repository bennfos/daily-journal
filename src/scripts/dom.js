
const entryContainer = document.querySelector(".entryLog")

const render = {
    renderEntry (entries) {
        entryContainer.innerHTML = ""
        for (let entry of entries) {
            let entryHTML = factory.makeJournalEntryComponent(entry)
        entryContainer.innerHTML += entryHTML
        }
    }
}


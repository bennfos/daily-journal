


import factoryObject from "./factory.js"

const sortEntries = (entries) => {
    entries.sort(function(a, b) {
        if (a.date < b.date) {
            return 1
        }
        if (a.date > b.date) {
            return -1
        }
        return 0;
    })
}

const render = {
    renderEntry (entries) {
        factoryObject.entryContainer.innerHTML = ""
        sortEntries(entries)
        for (let entry of entries) {
            let entryHTML = factoryObject.factory.makeJournalEntryComponent(entry)
        factoryObject.entryContainer.innerHTML += entryHTML
        }
    }
}

export default render
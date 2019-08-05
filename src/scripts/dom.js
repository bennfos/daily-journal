


import factoryObject from "./factory.js"

const render = {
    renderEntry (entries) {
        factoryObject.entryContainer.innerHTML = ""
        for (let entry of entries) {
            let entryHTML = factoryObject.factory.makeJournalEntryComponent(entry)
        factoryObject.entryContainer.innerHTML += entryHTML
        }
    }
}

export default render
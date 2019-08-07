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
    if (dateInput.value === "" || conceptInput.value === "" || entryInput.value === "" || moodInput.value === "") {
        alert("Please fill in all fields before submitting")
    } else {
    API.saveJournalEntry(newEntry)
        .then(() => { 
            API.getEntriesData()
            .then(entries => render.renderEntry(entries))
        })
    dateInput.value = ""
    conceptInput.value = ""
    entryInput.value = ""
    moodInput.value = ""
    }
})

const radioButtonSmile = document.querySelector("#filterSmile")
const radioButtonKicking = document.querySelector("#filterKicking")
const radioButtonCatch = document.querySelector("#filterCatch")
const radioButtonBiggerBoat = document.querySelector("#filterBiggerBoat")
const radioButtonDrowning = document.querySelector("#filterDrowning")
const radioButtonFarewell = document.querySelector("#filterFarewell")
const radioButtonSeeAll = document.querySelector("#filterSeeAll")

radioButtonSmile.addEventListener("click", (event) => {
    const mood = event.target.value
    API.getEntriesData().then(entries => {
        const filteredEntries = entries.filter(entry => entry.mood === mood)
    factoryObject.entryContainer.innerHTML = ""
        render.renderEntry(filteredEntries)
    })
})

radioButtonKicking.addEventListener("click", (event) => {
    const mood = event.target.value
    API.getEntriesData().then(entries => {
        const filteredEntries = entries.filter(entry => entry.mood === mood)
    factoryObject.entryContainer.innerHTML = ""
        render.renderEntry(filteredEntries)
    })
})

radioButtonCatch.addEventListener("click", (event) => {
    const mood = event.target.value
    API.getEntriesData().then(entries => {
        const filteredEntries = entries.filter(entry => entry.mood === mood)
    factoryObject.entryContainer.innerHTML = ""
        render.renderEntry(filteredEntries)
    })
})

radioButtonBiggerBoat.addEventListener("click", (event) => {
    const mood = event.target.value
    API.getEntriesData().then(entries => {
        const filteredEntries = entries.filter(entry => entry.mood === mood)
    factoryObject.entryContainer.innerHTML = ""
        render.renderEntry(filteredEntries)
    })
})

radioButtonDrowning.addEventListener("click", (event) => {
    const mood = event.target.value
    API.getEntriesData().then(entries => {
        const filteredEntries = entries.filter(entry => entry.mood === mood)
    factoryObject.entryContainer.innerHTML = ""
        render.renderEntry(filteredEntries)
    })
})

radioButtonFarewell.addEventListener("click", (event) => {
    const mood = event.target.value
    API.getEntriesData().then(entries => {
        const filteredEntries = entries.filter(entry => entry.mood === mood)
    factoryObject.entryContainer.innerHTML = ""
        render.renderEntry(filteredEntries)
    })
})

radioButtonSeeAll.addEventListener("click", (event) => {
    API.getEntriesData().then(entries => {
        factoryObject.entryContainer.innerHTML = ""
        render.renderEntry(entries)
    })
})




factoryObject.entryContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEntry--")) {
        const entryToDelete = event.target.id.split("--")[1]
        console.log(entryToDelete)
        API.deleteJournalEntry(entryToDelete)
            .then(API.getEntriesData)
            .then(entries => {
                factoryObject.entryContainer.innerHTML = ""
                render.renderEntry(entries)
            })
    }
})
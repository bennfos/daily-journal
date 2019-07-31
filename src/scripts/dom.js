let dateInput = document.getElementById("journalDate")
let conceptInput = document.getElementById("conceptsCovered")
let entryInput = document.getElementById("journalEntry")
let moodInput = document.getElementById("mood")
const entryContainer = document.querySelector(".entryLog")



const render = {
    renderEntry (htmlString) {
        entryContainer.innerHTML += htmlString
    }
}


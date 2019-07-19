let dateInput = document.getElementById("journalDate");
let conceptInput = document.getElementById("conceptsCovered");
let entryInput = document.getElementById("journalEntry");
let moodInput = document.getElementById("mood");
const button = document.getElementById("recordEntryButton");
const entryContainer = document.querySelector(".entryLog");

// Define an array that will hold all types of journal entries
journalEntries = []

// Adds journal entry objects to entries array
const addEntry = (journalEntry) => {
    journalEntries.push(journalEntry);
}


//Write new entry here

const journalEntryJuly18 = {
    date: "7/18/2019",
    concept: "APIs, Rendering to the DOM, LinkedIn",
    entry: "Struggling with the steps to take to get the functions to work that render HTML to the DOM. Also need to remember not to procrastinate with LinkedIn. Keep up with it and it will save a lot of time. I have very little idea what's going on with APIs, but today was just an intro",
    mood: "I'll catch this bird for ya, but it ain't gonna be easy."
}

const journalEntryJuly17 = {
    date: "7/17/2019",
    concept: "Components and Functions",
    entry: "Learned about adding HTML components to the DOM dynamically with Javascript. Struggled with the functions but ultimately finished almost all the exercises.",
    mood: "I think the tide's with us. --Keep kicking."
}

const journalEntryJuly15 = {
    date: "7/15/2019",
    concept: "Functions",
    entry: "Practiced creating functions with Book 2, ch. 4 exercises. Was able to get most of them but struggled with using the forEach array method within functions",
    mood: "I think the tide's with us. --Keep kicking."
}

//Add entry to entry array here

addEntry(journalEntryJuly18)
addEntry(journalEntryJuly17)
addEntry(journalEntryJuly15)






const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    const entryHTML = `
        <div class="entry journalEntryForm">
            <h2 class="bottomMarginSmall serif serif--small" >${journalEntry.concept}</h2>
            <p class="topMarginSmall archivo">${journalEntry.date}</p>
            <p class="serif serif--tiny">${journalEntry.entry}</p>
            <p class="serif serif--tiny">Mood: "${journalEntry.mood}"</p>
        </div>
    `
       entryContainer.innerHTML += entryHTML
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const renderEntries = () => {
    journalEntries.forEach(currentEntry => {
        makeJournalEntryComponent(currentEntry);
    })
}


// Invoke the render function

renderEntries();
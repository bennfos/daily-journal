let dateInput = document.getElementById("journalDate");
let conceptInput = document.getElementById("conceptsCovered");
let entryInput = document.getElementById("journalEntry");
let moodInput = document.getElementById("mood");
const button = document.getElementById("recordEntryButton");
const entryContainer = document.querySelector(".entryLog");



const journalEntry = {
    date: "7/15/2019",
    concept: "Functions",
    entry: "Practiced creating functions with Book 2, ch. 4 exercises. Was able to get most of them but struggled with using the forEach array method within functions",
    mood: "I think the tide's with us. --Keep kicking."
}

// Define an array that will hold all types of journal entries
const journalEntries = [
    {
    date: "7/15/2019",
    concept: "Functions",
    entry: "Practiced creating functions with Book 2, ch. 4 exercises. Was able to get most of them but struggled with using the forEach array method within functions",
    mood: "I think the tide's with us. --Keep kicking."
    },
    {
    date: dateInput,
    concept: conceptInput,
    entry: entryInput,
    mood: moodInput
    },
];

// Adds journal entry objects to entries array
journalEntries.push(journalEntry);



const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <div class="entry">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
        </div>
    `
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (journalEntries) => {
    journalEntries.forEach(currentEntry => {
        entryContainer.innerHTML = makeJournalEntryComponent(journalEntry);
    })
}

// Invoke the render function
renderJournalEntries(journalEntries);
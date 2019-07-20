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


// Declare variables that hold the strings for each mood
const keepKicking = "I think the tide's with us. --Keep kicking."
const catchBird = "I'll catch this bird for ya, but it ain't gonna be easy."
const smile = "Smile, you son of a bitch."
const drowning = "There's a clinical name for it, isn't there? --Drowning."
const farewell = "🎶Farewell and adieu to you, fair Spanish ladies🎶"
const biggerBoat = "You're gonna need a bigger boat."


const keepKickingGIF = `<img class="gifLink" src="https://media.giphy.com/media/6uIpPo7BHmLO8/giphy.gif"></img>`
const catchBirdGIF = `<img class="gifLink" src="https://media.giphy.com/media/8ABCP2H2CVNO8/giphy.gif"></img>`
const smileGIF = `<img class="gifLink" src="https://media.giphy.com/media/10FxDnvl2IGvzq/giphy.gif"></img>`
const drowningGIF = `<img class="gifLink" src="https://media.giphy.com/media/tsSp7dZRkGlK53G8vM/giphy.gif"></img>`
const biggerBoatGIF = `<img class="gifLink" src="https://media.giphy.com/media/ds6uvzSJqgp8I/giphy.gif"></img>`
const farewellGIF = `<img class="gifLink" src="https://media.giphy.com/media/6frspGzg5uC5i/giphy.gif"></img>`


const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    
    let entryHTML = `
        <div class="gif entry journalEntryForm">
            <h2 class="bottomMarginSmall serif serif--small" >${journalEntry.concept}</h2>
            <p class="topMarginSmall archivo">${journalEntry.date}</p>
            <p class="serif serif--tiny">${journalEntry.entry}</p>
            <p class="serif serif--tiny">Mood: "${journalEntry.mood}"</p>
        </div>
    `
    entryContainer.innerHTML += entryHTML
    
    if (journalEntry.mood === keepKicking) {       
        entryContainer.innerHTML += keepKickingGIF

    } else if (journalEntry.mood === catchBird) {       
        entryContainer.innerHTML += catchBirdGIF

    } else if (journalEntry.mood === smile) {        
        entryContainer.innerHTML += smileGIF

    } else if (journalEntry.mood === drowning) {
        entryContainer.innerHTML += drowningGIF

    } else if (journalEntry.mood === biggerBoat) {
        entryContainer.innerHTML += biggerBoatGIF

    } else if (journalEntry.mood === farewell) {
        entryContainer.innerHTML += farewellGIF
    }
}


//Write new entry here

const test1 = {
    date: "7/18/2019",
    concept: "APIs, Rendering to the DOM, LinkedIn",
    entry: "Struggling with the steps to take to get the functions to work that render HTML to the DOM. Also need to remember not to procrastinate with LinkedIn. Keep up with it and it will save a lot of time. I have very little idea what's going on with APIs, but today was just an intro",
    mood: biggerBoat
}

const test2 = {
    date: "7/18/2019",
    concept: "APIs, Rendering to the DOM, LinkedIn",
    entry: "Struggling with the steps to take to get the functions to work that render HTML to the DOM. Also need to remember not to procrastinate with LinkedIn. Keep up with it and it will save a lot of time. I have very little idea what's going on with APIs, but today was just an intro",
    mood: farewell
}

const test3 = {
    date: "7/18/2019",
    concept: "APIs, Rendering to the DOM, LinkedIn",
    entry: "Struggling with the steps to take to get the functions to work that render HTML to the DOM. Also need to remember not to procrastinate with LinkedIn. Keep up with it and it will save a lot of time. I have very little idea what's going on with APIs, but today was just an intro",
    mood: smile
}


const journalEntryJuly18 = {
    date: "7/18/2019",
    concept: "APIs, Rendering to the DOM, LinkedIn",
    entry: "Struggling with the steps to take to get the functions to work that render HTML to the DOM. Also need to remember not to procrastinate with LinkedIn. Keep up with it and it will save a lot of time. I have very little idea what's going on with APIs, but today was just an intro",
    mood: catchBird
}

const journalEntryJuly17 = {
    date: "7/17/2019",
    concept: "Components and Functions",
    entry: "Learned about adding HTML components to the DOM dynamically with Javascript. Struggled with the functions but ultimately finished almost all the exercises.",
    mood: drowning
}

const journalEntryJuly15 = {
    date: "7/15/2019",
    concept: "Functions",
    entry: "Practiced creating functions with Book 2, ch. 4 exercises. Was able to get most of them but struggled with using the forEach array method within functions",
    mood: keepKicking
}

//Add entry to entry array here

addEntry(test1)
addEntry(test2)
addEntry(test3)
addEntry(journalEntryJuly18)
addEntry(journalEntryJuly17)
addEntry(journalEntryJuly15)


// createGIF(url "https://media.giphy.com/media/3o85xyxJ55W5SZZi1i/giphy.gif")

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


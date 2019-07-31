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

const factory = {
    makeJournalEntryComponent (journalEntry) {
    // Create your own HTML structure for a journal entry
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
    return `
        <div id="entry" class="gif entry journalEntryForm">
            <h2 class="bottomMarginSmall serif serif--small" >${journalEntry.concept}</h2>
            <p class="topMarginSmall archivo">${journalEntry.date}</p>
            <p class="serif serif--tiny">${journalEntry.entry}</p>
            <p class="serif serif--tiny">Mood: "${journalEntry.mood}"</p>
        </div>
    `
    }
}

const makeEntryObject = (date, concept, entry, mood) => {
    return `
        {
            "date": "${date}",
            "concept": "${concept}",
            "entry": "${entry}",
            "mood": "${mood}"
        }
    `
}
//Fetch entries from API, then parse them to JSON, then make and render components to DOM
const API = {
getEntriesData () {
    return fetch("http://localhost:3000/entries")
    .then(response => response.json())

    }
}
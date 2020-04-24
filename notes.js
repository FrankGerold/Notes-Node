const fs = require('fs')

const getNotes = () => "Your Notes..."

const addNote = (title, body) => {
    const notes = loadNotes()

    let newNote = {
        title,
        body
    }

    const dupes = notes.filter((note) => note.title === newNote.title)

    if (!dupes.length) {
        let newNotes = [
            ...notes,
            newNote
        ]
        console.log("Notes:", notes, typeof notes, "\nNew Note:", newNote, "\nNew Notes:", newNotes)

        saveNotes(newNotes)
        console.log('Note Added!')
    } else {
        console.log('Note Title Taken')
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)

    fs.writeFileSync('notes.json', data)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote
}

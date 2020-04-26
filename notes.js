const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your Notes..."

const addNote = (title, body) => {
    const notes = loadNotes()

    let newNote = {
        title,
        body
    }

    const dupes = notes.filter(note => note.title === newNote.title)

    if (!dupes.length) {
        let newNotes = [
            ...notes,
            newNote
        ]

        console.log("Notes:", notes, typeof notes, "\nNew Note:", newNote, "\nNew Notes:", newNotes)

        saveNotes(newNotes)
        console.log(chalk.bgGreen.blue('Note Added!'))
    } else {
        console.log(chalk.bgRed.green('Note Title Taken'))
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

const deleteNote = (title) => {
    const notes = loadNotes()
    // const noteExists = notes.filter(note => note.title === title)
    // let note = notes.find(note => note.title === title)

    if (notes.some(note => note.title === title)) {
       let newNotes = notes.filter(note => note.title !== title)
        saveNotes(newNotes);
        console.log(chalk.bgGreen.blue(`Deleted note ${title}!`))
    }
    else {
        console.log(chalk.bgRed.green(`Note ${title} doesn't exist!`))
    }
}

module.exports = {
    getNotes,
    addNote,
    deleteNote
}

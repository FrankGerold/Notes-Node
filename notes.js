const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue("Your Notes:"))

    // for (note of notes) {
    //     console.log(chalk.bgBlue.red(note.title))
    // }

    notes.forEach(note => console.log(chalk.blue(note.title)))

    console.log('To read a note, use the \'read\' command!')
}

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

        saveNotes(newNotes)
        console.log(chalk.green('Note Added!'))
    } else {
        console.log(chalk.red('Note Title Taken'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    let note = notes.find(note => note.title === title)

    if (note) {
        console.log(`Note "${note.title}":\n\n${note.body}\n`)
    }
    else {
        console.log(chalk.red(`Sorry, note "${title}" doesn't exist!`))
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

    if (notes.some(note => note.title === title)) {
       let newNotes = notes.filter(note => note.title !== title)
        saveNotes(newNotes);
        console.log(chalk.green(`Deleted note ${title}!`))
    }
    else {
        console.log(chalk.red(`Note ${title} doesn't exist!`))
    }
}

module.exports = {
    getNotes,
    addNote,
    deleteNote,
    readNote
}

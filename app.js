const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

console.log(chalk.bgRed.blue('Welcome to Node Note APp!'))

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note!',
  handler: (argv) => notes.addNote(argv.title, argv.body),
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
      alias: 't'
    },
    body: {
      describe: 'Body of Note',
      type: 'string',
      demandOption: true,
      alias: 'b'
    }
  }
})

// Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  handler: argv => notes.deleteNote(argv.title),
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
      alias: 't'
    }
  }
})

// list command
yargs.command({
  command: 'list',
  alias: 'l',
  describe: 'List all notes',
  handler: (argv) => notes.getNotes()
})

// read command
yargs.command({
  command: 'read',
  alias: 'r',
  describe: 'Read a note',
  handler: () => console.log('reading note now:')
})


yargs.argv;
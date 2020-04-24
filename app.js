// const fs = require('fs')
// fs.writeFileSync('notes.txt', '420 blaze it!')

const notes = require('./notes.js');
// const validator = require('validator')
// import validator from 'validator';
const chalk = require('chalk')
const yargs = require('yargs')

// const command = process.argv[2]

// console.log(notes());
// console.log(validator.isEmail('frank@mail.com'));
// console.log(validator.isEmail('frankmail.com'));
// console.log(validator.isURL('frankmail.com'));

// customize yargs erison
yargs.version('1.1.0')

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note!',
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  },
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
  describe: 'Remove a notwe!',
  handler: () => console.log('removing that note')
})

// list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => console.log('List of notes:')
})

// read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('reading note now:')
})

console.log(chalk.red.bgBlue.bold('Cool Dude Alert'));
console.log('Process arguments:', process.argv);
console.log('Yargs arguments:', yargs.argv);

// if (command === 'add') {
//   console.log('Adding note!');
// }
// else if (command === 'remove') {
//   console.log('Removing note!');
// }

const readline = require('readline')
// const fs = require('fs/promises')
// const path = require('path')
// const notes = require('../data/notes')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function listNotes() {
    console.log('listing notes')
    init()
}
function readNotes() {
    console.log('reading notes')
    init()
}

function createNotes() {
    console.log('creating notes')
    init()
}

function deleteNotes() {
    console.log('deleting notes')
    init()
}
function exit() {
    console.log('exiting notes')
    rl.close()
}

function init() {
    rl.question(`
    Hello!
    -----------------
    CHOOSE AN OPTION:
    -----------------
    (L)ist
    (R)ead
    (C)reate
    (D)elete
    (E)xit
    `, answer => {
        if (answer === 'l') {
            listNotes()
        }
        if (answer === 'r') {
            readNotes()
        }
        if (answer === 'c') {
            createNotes()
        }
        if (answer === 'd') {
            deleteNotes()
        }
        if (answer === 'e') {
            exit()
        }
    })
}

init()

const fs = require('fs/promises')
const path = require('path')
const { spawn } = require('child_process')

const filePath = path.join(__dirname, 'newFile.txt')

const ping = spawn('ping', ['google.com'])

ping.stdout.on('data', (data) => {
    console.log('stdout', data.toString())
    fs.appendFile(filePath, data.toString())
        .then(() => console.log('complete'))
})
ping.stderr.on('data', (data) => console.log('stderr', data.toString()))
ping.on('error', (error) => console.log('error', error.message))
ping.on('close', (code) => console.log('complete', code))

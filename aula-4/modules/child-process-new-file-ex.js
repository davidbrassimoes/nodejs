const fs = require('fs/promises')
const path = require('path')
const { spawn } = require('child_process')

const filePath = path.join(__dirname, 'newFile.txt')

const newFile = spawn('echo', ['hello world > newFile.txt'])
newFile.stdout.on('data', () => {
    fs.appendFile(filePath, ['hello world'])
        .then(() => console.log('complete'))
})
// instalar ImageMagick
// $ convert mar.jpg -grayscale Rec709luminance bw.jpg

const { exec, spawn } = require('child_process')
const { lstat } = require('fs')

exec('ping google.com', (err, stdout, stderr) => {
    if (err) {
        console.log('Error!', err.message)
        return
    }
    console.log(stdout)
})

const ls = spawn('dir')

ls.stdout.on('data', (data) => console.log('stdout', data.toString()))
ls.stderr.on('data', (data) => console.log('stderr', data.toString()))
ls.on('error', (data) => console.log('error', error.message))
ls.on('close', (code) => console.log('complete', code))
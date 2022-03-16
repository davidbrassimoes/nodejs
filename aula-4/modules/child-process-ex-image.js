const fs = require('fs/promises')
const path = require('path')
const { spawn } = require('child_process')

const bw = spawn('convert mar.jpg -grayscale Rec709luminance bw.jpg')

bw.stdout.on('data', (data) => console.log('stdout', data.toString()))
bw.stderr.on('data', (data) => console.log('stderr', data.toString()))
bw.on('error', (error) => console.log('error', error.message))
bw.on('close', (code) => console.log('complete', code))
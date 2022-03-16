const { spawn, exec } = require('child_process')
const { resolve, join } = require('path')
const { createInterface } = require('readline')
const { randomUUID } = require('crypto')

// exec(`convert ${filePath} -grayscale Rec709luminance ../data/x.png`)

const convertToGrayscale = async (image, target = null) => new Promise((resolve, reject) => {
    const ext = extname(image)
    const pathTo = target
        ? resolve(target, randomUUID() + ext)
        : join(__dirname, 'data', randomUUID() + ext)
    const convert = spawn('convert', [image, '-grayscale', 'Rec709luminance', pathTo])

    convert.stdout.on('data', data => console.log(data.toString()))
    convert.stdout.on('data', data => console.log(data.toString()))

    convert.on('error', error => reject(error))
    convert.on('close', () => resolve())
})

    (async () => {
        // const originalImage = join(__dirnam, 'data', 'bit-and-coin.png')
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question('Source: ', async (answer) => {
            const originalImage = resolve(answer)
            rl.question('Target: ', async (answer) => {
                await convertToGrayscale(originalImage, answer)
                rl.close()

            })
        })
    })()
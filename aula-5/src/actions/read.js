// const { reader } = require("../core/file-manager")
// const { userInput } = require("../io/input")
// const list = require("../actions/list")


// module.exports = async (cb = null) => {

//     await list()

//     const readNoteName = await userInput('Which note do you want to read? ')

//     console.log((await reader(readNoteName)).toString())

//     if (cb) cb()
// }



// SOLUÇÃO FRANCISCO
const { reader } = require("../core/file-manager")
const { userInput } = require("../io/input")
const { title, line, output } = require("../io/output")

module.exports = async (cb = null) => {
    title('Read Note')

    const name = await userInput('Name: ')
    const content = await reader(name)

    line()
    output(`\n${content}\n`)
    line()

    if (cb) cb()
}
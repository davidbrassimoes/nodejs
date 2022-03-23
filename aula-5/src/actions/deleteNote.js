// const { remove } = require("../core/file-manager")
// const { userInput } = require("../io/input")
// const list = require("../actions/list")

const { remove } = require("../core/file-manager")
const { userInput, alert } = require("../io/input")
const { title, output } = require("../io/output")

// module.exports = async (cb = null) => {

//     await list()

//     const deletedNoteName = await userInput('Which note do you want to delete? ')

//     remove(deletedNoteName)

//     if (cb) cb()
// }



// SOLUÇÃO FRANCISCO

module.exports = async (cb = null) => {
    title('Remove Note')

    const name = await userInput('Name: ')

    await alert(`Remove file with name ${name}`, async () => {
        await remove(name)
        output(`Removed note ${name}`)
    })

    if (cb) cb()
}
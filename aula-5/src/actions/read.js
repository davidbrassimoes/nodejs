const { reader } = require("../core/file-manager")
const { userInput } = require("../io/input")
const list = require("../actions/list")

module.exports = async (cb = null) => {

    await list()

    const readNoteName = await userInput('Which note do you want to read? ')

    console.log((await reader(readNoteName)).toString())

    if (cb) cb()
}
const { remove } = require("../core/file-manager")
const { userInput } = require("../io/input")
const list = require("../actions/list")

module.exports = async (cb = null) => {

    await list()

    const deletedNoteName = await userInput('Which note do you want to delete? ')

    remove(deletedNoteName)

    if (cb) cb()
}
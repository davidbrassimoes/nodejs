const create = require("../actions/create")
const deleteNote = require("../actions/deleteNote")
const edit = require("../actions/edit")
const list = require("../actions/list")
const read = require("../actions/read")

module.exports = (option, cb = null) => {
    switch (option.toUpperCase()) {
        case 'L': list(cb)
            break
        case 'R': read(cb)
            break
        case 'C': create(cb)
            break
        case 'U': edit(cb)
            break
        case 'D': deleteNote(cb)
            break
        case 'E': break
        default: cb()
    }
}
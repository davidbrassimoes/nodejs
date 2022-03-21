const { list } = require("../core/file-manager")

module.exports = async (cb = null) => {
    (await list()).forEach(file => console.log(file))

    if (cb) cb()
}
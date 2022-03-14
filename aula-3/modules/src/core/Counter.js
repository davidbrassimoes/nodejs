const EventEmitter = require('events')
const { start } = require('repl')
const { clearInterval } = require('timers')

class Counter extends EventEmitter {

    static INCREMENT = 'increment'
    #count = 0
    #timer = null

    constructor(time) {
        super()
    }

    start(time) {
        this.#timer = setInterval(() => {
            this.#count++
            this.emit(Counter.INCREMENT, this.#count)
        }, time * 1000)
    }

    finish() {
        clearInterval(this.#timer)
    }
}


module.exports = Counter
class Sys {

    static wait(ms) {
        return new Promise(r => setTimeout(r, ms))
    }

}

module.exports = Sys
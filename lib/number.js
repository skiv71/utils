class Module {

    static ordinal(v) {
        var s = `${v}`
        switch(s.slice(-1)) {
            case `1`:
                return `${v}st`
            case `2`:
                return `${v}nd`
            case `3`:
                return `${v}rd`
            default:
                return `${v}th`
        }
    }

}

module.exports = Module
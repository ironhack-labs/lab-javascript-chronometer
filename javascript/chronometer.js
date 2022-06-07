class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = null
    }

    start(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++
                /*                 if (callback) {
                                    callback()
                                } */
        }, 1000)

    }

    getMinutes() {
        return Math.floor(this.currentTime / 60)
    }

    getSeconds() {
        return Math.floor(this.currentTime % 60)
    }

    computeTwoDigitNumber(value) {
        let twoDigNum = 0

        if (value > 9) {
            twoDigNum = value.toString()
        } else {
            twoDigNum = ("0" + value) //.slice(-2) //mirar exactamente como funciona. Pasa el test sin el slice(2)
        }
        return twoDigNum
    }

    stop() {
        clearInterval(this.intervalId)
    }

    reset() {
        this.currentTime = 0
    }

    split() {
        return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
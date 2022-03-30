class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = null
    }



    start(callBack) {

        if (callBack) {
            callBack()
        }

        this.intervalId = setInterval(() => {
            return this.currentTime++
        }, 1000)

    }



    getMinutes() {
        return Math.floor(this.currentTime / 60)
            // ... your code goes here
    }


    getSeconds() {
        return (this.currentTime % 60)
            // ... your code goes here
    }

    computeTwoDigitNumber(value) {
        if (value == 0) {
            return "00"
        } else if (value > 10) {
            return `${value}`
        } else {
            return `0${value}`
        }
    }

    stop() {

        return clearInterval(this.intervalId)

        // ... your code goes here
    }

    reset() {
        return this.currentTime = 0


        // this.currentTime * 0
        // this.intervalId = setInterval(() => {
        //     return this.currentTime++
        // }, 1000)

        // ... your code goes here
    }

    split() {
        let min = this.computeTwoDigitNumber(this.getMinutes())
        let sec = this.computeTwoDigitNumber(this.getSeconds())
        return `${min}:${sec}`
            // ... your code goes here
    }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
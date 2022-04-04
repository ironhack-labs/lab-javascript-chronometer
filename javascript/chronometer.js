class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;

    }

    start(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            this.currentTime++

                if (callback != null) {
                    return callback();
                }

        }, 1000);


    }

    getMinutes() {
        let minutes = Math.floor(this.currentTime / 60);
        return minutes;
    }

    getSeconds() {
        let seconds = this.currentTime % 60;
        return seconds;
    }

    computeTwoDigitNumber(value) {

        let valueToString = value.toString()
        if (valueToString.length < 2) {
            return "0" + valueToString;
        } else if (valueToString.length === 2) {
            return valueToString;
        }
    }

    stop() {
        // ... your code goes here
        clearInterval(this.intervalId)
    }

    reset() {
        return this.currentTime = 0;
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
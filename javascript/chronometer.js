class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(counter = 0) {
        this.intervalId = setInterval(() => {
            this.currentTime++
        }, 1000)
        return counter;
    }

    getMinutes() {
        const minutes = Math.floor(this.currentTime/60);
        return minutes;
    }

    getSeconds() {
        const seconds = this.currentTime % 60;
        return seconds;
    }

    computeTwoDigitNumber(value) {
        if (value < 10) {
            return `0${value}`;
        } else {
            return `${value}`;
        }
    }

    stop() {
        clearInterval(this.intervalId);
    }

    reset() {
        return this.currentTime = 0;
    }

    split() {
        let minutesTime = this.computeTwoDigitNumber(this.getMinutes());
        let secondsTime = this.computeTwoDigitNumber(this.getSeconds());
        return `${minutesTime}:${secondsTime}`;
    }
}

const chronos = new Chronometer()

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}

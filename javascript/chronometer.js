class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++;
        }, 1000);
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        return Math.floor(this.currentTime % 60);
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
        this.currentTime = 0;
    }

    split() {
        let min = this.getMinutes();
        let sec = this.getSeconds();
        return `${this.computeTwoDigitNumber(min)}:${this.computeTwoDigitNumber(
      sec
    )}`;
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
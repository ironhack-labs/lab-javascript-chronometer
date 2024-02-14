class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(callback) {
        this.intervalId = setInterval(() => {
        this.currentTime+=10;
        if (callback) {
            callback();
        }
    }, 10);
    }

    getMinutes() {
        return Math.floor((this.currentTime / 1000) / 60);
    }

    getSeconds() {
        return Math.floor((this.currentTime / 1000) % 60);
    }

    getMiliseconds() {
        return Math.floor((this.currentTime % 1000) / 10);
    }

    computeTwoDigitNumber(n) {
        let stringValue = n.toString()
        if (stringValue.length === 1) {
            return '0' + stringValue
        }
        return stringValue
    }

    stop() {
        clearInterval(this.intervalId);
    }
    
    reset() {
        this.currentTime = 0;
    }

    split() {
        return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()) + ':' + this.computeTwoDigitNumber(this.getMiliseconds());
    }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(callback) {
        this.intervalId = setInterval(() => {
            //console.log(this.currentTime);

            this.currentTime++;
            if (callback) callback();
        }, 10);

        return this.intervalId;
    }

    getMinutes() {
        const minutes = Number(Math.floor((this.currentTime / 6000) % 60).toFixed(0));
        //console.log(minutes);
        return minutes;
    }

    getSeconds() {
        const seconds = Math.floor(this.currentTime / 100) % 60;
        console.log(seconds);
        return seconds
    }

    getmiliSeconds() {
        const miliseconds = this.currentTime % 100;
        return miliseconds
    }

    computeTwoDigitNumber(value) {
        let numberStr = '';

        numberStr = value.toString();
        if (numberStr.length < 2) {
            numberStr = `0${numberStr}`;

        }
        return numberStr;
    }

    stop() {
        //this.currentTime = null;
        clearInterval(this.intervalId);
    }

    reset() {
        this.currentTime = 0;
    }

    split() {
        const minutes = this.computeTwoDigitNumber(this.getMinutes());
        const seconds = this.computeTwoDigitNumber(this.getSeconds());
        const milliseconds = this.computeTwoDigitNumber(this.getmiliSeconds())
        return `${minutes}:${seconds}:${milliseconds}`

    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
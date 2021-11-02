class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;

        // ... your code goes here
    }
    start(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            this.currentTime++;
        }, 1000)
        setTimeout(() => {
            clearInterval(this.intervalId);
        }, 3000);
    }

    getMinutes() {
        // ... your code goes here
        return Math.floor((this.currentTime / 60));

    }

    getSeconds() {
        // ... your code goes here
        return this.currentTime % 60
    }

    computeTwoDigitNumber(value) {
        // ... your code goes here
        return ('0' + value).slice(-2);

    }
    stop() {
        // ... your code goes here
        clearInterval(this.intervalId);

    }

    reset() {
        // ... your code goes here
        clearInterval(this.intervalId);
        this.currentTime = 0
    }

    split() {
        // ... your code goes here
        const ss = this.computeTwoDigitNumber(this.getSeconds());
        const mm = this.computeTwoDigitNumber(this.getMinutes());

        return `${mm}:${ss}`;
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
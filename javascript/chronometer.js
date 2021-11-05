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
        }, 1000);
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
        /* if (value<10){
            return `0${value}`;
            else {
                return `${value}`;
            }
        } */
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
        let seg = this.computeTwoDigitNumber(this.getSeconds()); //ss
        let min = this.computeTwoDigitNumber(this.getMinutes()); //mm

        return `${min}:${seg}`; // mm ss
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
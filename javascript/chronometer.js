class Chronometer {
    constructor() {
        // ... your code goes here
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            console.log(this.currentTime);

            this.currentTime++;
            //this.getMinutes()
        }, 1000);

        return this.intervalId;
    }

    getMinutes() {
        // ... your code goes here
        let minutes = Number((Math.floor(this.currentTime / 60).toFixed(0)));
        console.log(minutes);
        return minutes;
    }

    getSeconds() {
        return (this.currentTime % 60);
        // ... your code goes here
    }

    computeTwoDigitNumber(value) {
        // ... your code goes here
        let numberStr = '';

        numberStr = value.toString();
        if (numberStr.length < 2) {
            numberStr = `0${numberStr}`;

        }
        return numberStr;
    }

    stop() {
        // ... your code goes here
        //this.currentTime = null;
        clearInterval(this.intervalId);
    }

    reset() {
        // ... your code goes here
        this.currentTime = 0;
    }

    split() {
        // ... your code goes here
        const minutes = this.computeTwoDigitNumber(this.getMinutes());
        const seconds = this.computeTwoDigitNumber(this.getSeconds());

        return `${minutes}:${seconds}`

    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
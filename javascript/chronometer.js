class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime += 1;
            if (callback) callback();
        }, 1000);
    }

    getMinutes() {
        let minutes = Math.floor(this.currentTime / 60)
        return minutes
    }

    getSeconds() {
        if (!this.currentTime)
            return 0;
        return this.currentTime - this.getMinutes() * 60;
    }

    // getMilliseconds() {
    //     let miliseconds = Math.floor(this.currentTime / 6000)
    //     return miliseconds
    // }

    twoDigitsNumber(numberToString) {
        return (numberToString > 10 ? String(numberToString) : `0` + numberToString);
    }
    stopClick(intervalId) {
        clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick() {
        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
    }
}
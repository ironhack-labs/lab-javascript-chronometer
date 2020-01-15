class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick() {
        this.intervalId = setInterval(() => this.currentTime++, 1000)
            // console.log(this.currentTime)
    }
    getMinutes() {
        return parseInt(this.currentTime / 60);
    }

    getSeconds() {
        return parseInt(this.currentTime % 60);
    }

    twoDigitsNumber(value) {
        if (value <= 9) {
            return `0${value}`;
        } else {
            return value.toString(10);
        }
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {
        return this.twoDigitsNumber(this.getMinutes()) + ": " + this.twoDigitsNumber(this.getSeconds());
    }
}
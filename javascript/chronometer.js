class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            callback();
        }, 10)
    }
    getMinutes() {
        return Math.floor(this.currentTime / 6000) % 99
    }
    getSeconds() {
        return Math.floor(this.currentTime / 100) % 60
    }
    getCs() {
        return this.currentTime % 100
    }
    twoDigitsNumber(number) {
        let stringNumber = number.toString()
        if (stringNumber.length < 2) {
            stringNumber = "0" + stringNumber
        }
        return stringNumber
    }
    stopClick() {
        clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick() {
        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getCs())}`
    }
}
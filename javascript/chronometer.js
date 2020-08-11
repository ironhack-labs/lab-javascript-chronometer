class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback) {
        // callback()
        setInterval(() => {
            this.currentTime++
        }, 1000)
    }
    getMinutes() {
        return Math.floor(this.currentTime / 60)
    }
    getSeconds() {
        return this.currentTime % 60
    }
    twoDigitsNumber(number) {
        let stringNumber = number.toString()
        if (stringNumber.length < 2) {
            stringNumber = "0" + stringNumber
        }
        return stringNumber
    }
    stopClick() {
        clearInterval();
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick() {
        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
    }
}
// AJDC: Dejo mis comentarios antes del pull-request los borramos.
class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = 0
    }

    startClick(callback) {
        this.intervalId = setInterval(() => this.currentTime++, 1);
    }
    getMinutes() {
        return Number(Math.floor(this.currentTime / 60000))
    }
    getSeconds() {
        return Number(Math.floor(this.currentTime / 1000))
    }
    getMilliseconds() {
        return Number(Math.floor(this.currentTime / 10))
    }
    twoDigitsNumber(number) {
        return number < 10 ? `0${number}` : `${number}`
    }
    stopClick() {
        clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0
    }
    splitClick() {
        const min = this.getMinutes()
        const sec = this.getSeconds()
        if (min < 10 && sec < 10) {
            return (`0${min}:0${sec}`);
        } else if (min > 10 && sec < 10) {
            return (`${min}:0${sec}`);
        } else if (min < 10 && sec > 10) {
            return (`0${min}:${sec}`);
        } else {
            return (`${min}:${sec}`);
        }
    }
}
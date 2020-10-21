class Chronometer {
    constructor() {
        this.currentTime = 0,
            this.intervalId = 0,
            this.currentMil = 0,
            this.milIntervalId = 0
    }
    startClick(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime += 1
            if (callback) {
                callback()
            }
        }, 1000)
        this.milIntervalId = setInterval(() => {
            this.currentMil += 1
        }, 10)
    }
    getMinutes() {
        return Math.floor(this.currentTime / 60)
    }
    getSeconds() {
        return this.currentTime - (this.getMinutes() * 60)
    }
    getMiliSeconds() {
        if (this.currentMil < 60) {
            return this.currentMil
        } else {
            this.currentMil = 0
            return this.currentMil
        }
    }
    twoDigitsNumber(num) {
        if (num < 10) {
            return `0${num}`
        } else {
            return `${num}`
        }
    }
    stopClick() {
        clearInterval(this.intervalId)
        clearInterval(this.milIntervalId)
    }
    resetClick() {
        this.currentTime = 0
        this.currentMil = 0
    }
    splitClick() {
        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMiliSeconds())}`
    }
}
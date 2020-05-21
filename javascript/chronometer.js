class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = 0
        this.currentTimeMilliseconds = 0
        this.intervalMilliseconds = 0
    }

    startClick(callback) {
        this.intervalId = setInterval(() => this.currentTime++, 1000)
        this.intervalMilliseconds = setInterval(() => this.currentTimeMilliseconds++, 10)
    }
    getMinutes() {
        return Number(Math.floor(this.currentTime / 60))
    }
    getSeconds() {
        return Number(this.currentTime)
    }
    getMilliseconds() {
        return Number(this.currentTimeMilliseconds - Math.floor(this.currentTimeMilliseconds / 100) * 100)
    }
    twoDigitsNumber(number) {
        return number < 10 ? `0${number}` : `${number}`
    }
    stopClick() {
        clearInterval(this.intervalId)
        clearInterval(this.intervalMilliseconds)
    }
    resetClick() {
        this.currentTime = 0
    }
    splitClick() {
        const min = this.getMinutes() < 10 ? `0${min}` : `${min}`
        const sec = this.getSeconds() < 10 ? `0${sec}` : `${sec}`
        const mil = this.getMilliseconds() < 10 ? `0${mil}` : `${mil}`

        return `${min}:${sec}:${mil}`
    }
}
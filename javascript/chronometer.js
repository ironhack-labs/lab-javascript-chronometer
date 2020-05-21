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
        let min = this.getMinutes()
        let sec = this.getSeconds()
        let mil = this.getMilliseconds()
        min = min < 10 ? `0${min}` : `${min}`
        sec = sec < 10 ? `0${sec}` : `${sec}`
        mil = mil < 10 ? `0${mil}` : `${mil}`

        return `${min}:${sec}:${mil}`
    }
}
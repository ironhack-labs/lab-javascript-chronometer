class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback) {
        const interval = setInterval(() => this.currentTime++, 1000);
        this.intervalId = interval;
        if (callback) callback()
    }
    getMinutes() {
        return Math.floor(this.currentTime / 60)
    }
    getSeconds() {
        return this.currentTime % 60
    }
    twoDigitsNumber(num) {
        console.log(num)
        num ? num = num.toString() : num = "0"
        return num.length === 1 ? num = `0${num}` : num
    }
    stopClick() {
        clearInterval(this.intervalId)
    }
    resetClick() {
        this.currentTime = 0
    }
    splitClick(min, sec) {
        min = this.twoDigitsNumber(min)
        sec = this.twoDigitsNumber(sec);
        return `${min}:${sec}`
    }

}
class Chronometer {
    constructor() {

        // ... your code goes here
        this.currentTime = 0
        this.intervalId = 0
    }
    startClick(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            this.currentTime += 1

        }, 1000)
    }
    getMinutes() {
        // ... your code goes here
        const minutes = Math.floor(this.currentTime / 60)
        return minutes
    }
    getSeconds() {
        // ... your code goes here
        const seconds = this.currentTime - this.getMinutes() * 60
        return seconds
    }

    twoDigitsNumber(time) {
        // ... your code goes here
        if (time < 10) {
            return '0' + time.toString()
        }
        return time.toString()
    }

    stopClick() {
        // ... your code goes here
        clearInterval(this.intervalId)
    }
    resetClick() {
        // ... your code goes here
        this.currentTime = 0
    }
    splitClick() {
        // ... your code goes here
        const min = this.twoDigitsNumber(this.getMinutes())
        const sec = this.twoDigitsNumber(this.getSeconds())
        return `${min}:${sec}`
    }
}
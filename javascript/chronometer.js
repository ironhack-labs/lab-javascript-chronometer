class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = 0
    }
    startClick(callback) {
        setInterval(() => this.currentTime++, 1000);
    }
    getMinutes() {
        return Number(Math.floor(this.currentTime / 60))
    }
    getSeconds() {
        return Number(this.currentTime - ((Math.floor(this.currentTime / 60)) * 60))
    }
    twoDigitsNumber() {
        return (this.getMinutes().slice(-1, 1))
    }
    stopClick() {
        // ... your code goes here
    }
    resetClick() {
        // ... your code goes here
    }
    splitClick() {
        // ... your code goes here
    }
}
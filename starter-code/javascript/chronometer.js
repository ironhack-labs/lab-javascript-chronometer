class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId;
    }

    startClick() {
        this.intervalId = setInterval(() => this.currentTime++, 1000);
    }

    getMinutes() {
        return parseInt(this.currentTime / 60);
    }
    
    getSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(value) {
        value === 0 ? value = `00` : 
        value < 10 ? value = `0${value}` : false;
        return `${value}`;
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }

    // splitClick() {s}
}
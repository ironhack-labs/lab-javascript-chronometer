class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
        }, 1000, this.currenTime);
    }

    getMinutes() {
        return parseInt(this.currentTime / 60);
    }

    getSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(number) {
        return (number + '').padStart(2,0);
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {
        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds()) }`
    }
}
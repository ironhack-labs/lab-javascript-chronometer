class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick(callback) {
        setInterval(() => {
            this.currentTime += 1;
        }, 1000);
    }

    getMinutes() {
        let minutes = Math.floor(this.currentTime / 60);
        return minutes;
    }

    getSeconds() {
        let seconds = Math.floor(this.currentTime % 60);
        return seconds;
    }


    twoDigitsNumber() {
        return "0" + this.currentTime.toString().slice(-2);
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;


    }
    splitClick() {
        let minutes = this.getMinutes;
        let seconds = this.getSeconds;

        return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`
    }
}
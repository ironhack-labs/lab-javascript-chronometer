class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
        }, 10, this.currenTime);
    }

    getMinutes() {
        return parseInt( (this.currentTime / 100 / 60) % 60 );
    }

    getSeconds() {
        return parseInt( (this.currentTime / 100) % 60 );
    }

    getMilliseconds() {
        return this.currentTime % 100;
    }

    twoDigitsNumber(number) {
        return (number + '').padStart(2, 0);
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {
        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`
    }
}
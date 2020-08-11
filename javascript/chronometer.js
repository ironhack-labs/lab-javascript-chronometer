class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
        this.currentMilliseconds = 0;
        this.intervalMillisecondsId = 0;
        // ... your code goes here
    }
    startClick(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            this.currentTime += 1;
            printTime(this.getMinutes(), this.getSeconds());
        }, 1000);

        this.intervalMillisecondsId = setInterval(() => {
            this.currentMilliseconds++;
            this.currentMilliseconds = this.currentMilliseconds % 100;
            printMilliseconds(this.twoDigitsNumber(this.getMilliseconds()));
        }, 10);

    }
    getMinutes() {
        // ... your code goes here
        return Math.floor(this.currentTime / 60);
    }
    getSeconds() {
        return this.currentTime % 60;
        // ... your code goes here
    }
    getMilliseconds() {
        return this.currentMilliseconds
    }
    twoDigitsNumber(number) {
        return number.toString().length == 1 ? `0${number}` : number.toString();
        // ... your code goes here
    }
    stopClick() {
        clearInterval(this.intervalId);
        clearInterval(this.intervalMillisecondsId);
        // ... your code goes here
    }
    resetClick() {
        this.currentTime = 0;
        this.currentMilliseconds = 0;
        // ... your code goes here
    }
    splitClick() {
        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
        // ... your code goes here
    }
}
'use strict'

class Chronometer {

    constructor() {
        this.currentTime = 0;
        this.currentMillis = 0;
        this.intervalId = 0;
        this.intervalMillisId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
        }, 1000);

        this.intervalMillisId = setInterval(() => {
            if (this.currentMillis < 99) {   
                this.currentMillis++;
            } else {
                this.currentMillis = 0;
            }
        }, 100);
    }
    // startClick() {
    //     this.intervalId = setInterval(function() {
    //         this.currentTime++;
    //     }.bind(this), 1000);
    // }

    setMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(num) {
        return (num < 10) ? "0" + num : num.toString();
    }

    setTime() {
        let minutes = this.twoDigitsNumber(this.setMinutes());
        let seconds = this.twoDigitsNumber(this.setSeconds());
        let millis = this.setMillis();
        return `${minutes}:${seconds}:${millis}`;
    }

    setMillis() {
        return this.currentMillis;
    }

    stopClick() {
        clearInterval(this.intervalId);
        clearInterval(this.intervalMillisId)
    }

    resetClick() {
        this.currentTime = 0;
        this.currentMillis = 0;
    }

}

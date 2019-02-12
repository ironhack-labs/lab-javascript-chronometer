'use strict'

class Chronometer {

    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
        }, 1000);

    }

    setMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(num) {
        return (num < 10) ? "0" + num : num.toString();
    }

    setTime(){
        this.minutes=this.twoDigitsNumber(this.setMinutes);
        this.seconds=this.twoDigitsNumber(this.setSeconds);
        
    }

    stopClick(){
        clearInterval(this.intervalId);
    }

    resetClick(){
        this.currentTime = 0;
    }

}

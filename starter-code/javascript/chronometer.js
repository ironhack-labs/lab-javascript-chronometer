class Chronometer {

    constructor() {
        this.currentTime = 0;
        this.Milisecond = 0;
        this.miliIntervalId = 0;
        this.intervalId = 0;
        this.status = "stopped";
    }
    start() {

        this.status = "running";

    }
    stop() {

        this.status = "stopped";

    }
    startClick(callback) {

        console.log(this.currentTime);
        this.start();
        this.intervalId = setInterval(() => {
            this.currentTime += 1;
            if (callback) callback();
            console.log(this.currentTime);
        }, 1000);

        this.miliIntervalId = setInterval(() => {
            this.Milisecond += 1;
            if (callback) callback();
            console.log(this.currentTime);
        }, 1);


    }
    getMinutes() {

        return Math.floor(this.currentTime / 60);

    }
    getSeconds() {

        return this.currentTime % 60;

    }
    getMilisecond() {

        return this.Milisecond % 1000;

    }
    threeDigitsNumber(value) {

        if (value < 10) {
            return "00" + value;
        } else if (value >= 10 && value < 99) {
            return "0" + value;
        } else {
            return "" + value;
        }

    }
    twoDigitsNumber(value) {

        if (value < 10) {
            return "0" + value;
        }
        return "" + value;
    }
    stopClick() {

        clearInterval(this.intervalId);
        clearInterval(this.miliIntervalId);
        this.stop();
        this.resetClick();

    }
    resetClick() {

        this.currentTime = 0;
        this.Milisecond = 0;

    }
}
class Chronometer {

    constructor() {
        this.currentTime = 0;
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
        this.intervalId = setInterval(() => {
            this.currentTime += 1;
            if(callback) callback();
            console.log(this.currentTime);
        }, 1000);
        this.start();
    }
    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }
    getSeconds() {
        return this.currentTime % 60;
    }
    getMilisecond(){

    }
    twoDigitsNumber(value) {
        if (value < 10) {
            return "0" + value;
        }
        return "" + value;
    }
    stopClick() {
        clearInterval(this.intervalId);
        this.stop();
        this.resetClick();
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick() {}
}
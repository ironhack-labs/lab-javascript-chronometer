class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick() {
        var fixedThis = this;
        this.intervalId = setInterval(function() {
            fixedThis.currentTime++;
            console.log(fixedThis.currentTime)
        }, 1000)
    }
    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }
    getSeconds() {
        return Math.floor((this.currentTime - (this.getMinutes() * 60)));
        // return this.currentTime - (Math.floor(this.currentTime / 60)) * 60
    }
    twoDigitsNumber(i) {
        return ('0' + i).slice(-2);
    }
    stopClick() {
        clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0;
        clearSplits();

    }
    splitClick() {
        printSplit();
    }
}
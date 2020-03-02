class Chronometer {
    constructor() {
        this.currentTime = 0,
            this.intervalId = 0
    }
    startClick() {
        var i = this;
        this.intervalId = setInterval(function() {
            i.currentTime++
        }, 1000);

    }
    getMinutes() {
        var minutes = Math.floor(this.currentTime / 60);
        return minutes;
    }
    getSeconds() {
        var seconds = Math.floor(this.currentTime % 60);
        return seconds;
    }
    twoDigitsNumber(time) {
        var str = time.toString();
        if (str.length < 2) {
            return 0 + str
        } else return str;

    }

    stopClick() {
        clearInterval(this.intervalId)
    }
    resetClick() {
            clearInterval(this.currentTime)
        }
        // splitClick() {
        // }
}
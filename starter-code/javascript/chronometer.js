//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.startClick = () => {
        this.intervalId = setInterval(() => {
            this.currentTime += 1
            this.setTime()
        }, 100)
    }
    this.setMinutes = () => {
        return Math.floor(this.currentTime / 60)
    }
    this.setSeconds = () => {
        return this.currentTime - (this.setMinutes() * 60)
    }
    this.twoDigitsNumber = number => {
        if (number < 10) return `0${number}`
        else return number.toString()
    }
    this.setTime = () => {
        var minutes = this.twoDigitsNumber(this.setMinutes())
        var seconds = this.twoDigitsNumber(this.setSeconds())
        printTime(minutes, seconds)
    }

    this.stopClick = () => {
        clearInterval(this.intervalId)
    }
    this.resetClick = () => {
        this.currentTime = 0;
    }
}



Chronometer.prototype.startClick = function () {

};

Chronometer.prototype.setMinutes = function () {

};

Chronometer.prototype.setSeconds = function () {

};

Chronometer.prototype.twoDigitsNumber = function () {

};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {

};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};

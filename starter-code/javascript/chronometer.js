//Constructor
function Chronometer() {
    this.currentTime = 0
    this.intervalId = 0;
    this.minutes = "00";
    this.seconds = "00";
    this.milliseconds = "00"
}

Chronometer.prototype.startClick = function () {
    // deux methodes pour appeler des paramètres exterieurs à la function, soit on met dans une variable
    // soit on utilise ()=>
    this.intervalId = setInterval(() => {
        this.currentTime += 1;
        this.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return (this.currentTime < 60) ? this.currentTime : (this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value.toString()
    }
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes())
    this.seconds = this.twoDigitsNumber(this.setSeconds())
};

Chronometer.prototype.setMilliseconds = function () {


};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    setTimeout(() => {
        this.currentTime = 0;
        this.setTime()
    }, 0)
};
Chronometer.prototype.splitClick = function () {

};

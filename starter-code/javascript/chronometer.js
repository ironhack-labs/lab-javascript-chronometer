//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
}
Chronometer.prototype = Object.create(Chronometer.prototype)
Chronometer.prototype.Constructor = Chronometer;


Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function () {
        that.currentTime++
    }, 1000)
    
};

Chronometer.prototype.setMinutes = function () {
var that = this;
return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    var that = this;
    return parseInt(this.currentTime % 60);

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

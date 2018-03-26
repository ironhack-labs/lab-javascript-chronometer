// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
   var that = this;
    this.intervalId = setInterval(function(){
        that.currentTime += 0.01;
        that.setTime();
    },10);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  return (this.currentTime) - Math.floor((this.currentTime/60))*60;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    var s = num+"";
    while (s.length < 2) s = "0" + s;
    return s;
};

Chronometer.prototype.setTime = function () {
    var minutes = this.setMinutes();
    var seconds = this.setSeconds();

    seconds = parseInt(seconds);
    seconds = this.twoDigitsNumber(seconds);
    minutes = this.twoDigitsNumber(minutes);
    return [seconds, minutes];
};

Chronometer.prototype.setMilliseconds = function () {
    var seconds = this.setSeconds();
    return seconds * 100;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};
// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var self = this;
  this.intervalId = setInterval(function() {
    self.currentTime++;
    self.setTime();
    //console.log(self.currentTime);
    return self.currentTime;
  }, 10);
};

Chronometer.prototype.setMinutes = function() {
  var minutes = Math.floor(this.currentTime/6000);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var seconds = 0;
    if (this.currentTime<=6000){
        seconds = Math.floor(this.currentTime / 100);
        return seconds;
    } else {
        seconds = this.currentTime % 6000;
        return seconds;
    }
};
Chronometer.prototype.setCentiSec = function () {
    var centiSec = 0;
    if (this.currentTime<=100){
        centiSec = this.currentTime;
        return centiSec;
    } else {
        centiSec = this.currentTime % 100;
        return centiSec;
    }
}

Chronometer.prototype.twoDigitsNumber = function (value) {
    var twoDigit = "";
    if (value<10){
        twoDigit = "0" + value;
    } else {
        twoDigit = value.toString();
    }
    return twoDigit;
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var centiSec = this.twoDigitsNumber(this.setCentiSec());
    return [minutes, seconds, centiSec]
};

//Chronometer.prototype.setMilliseconds = function () {
    
//};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

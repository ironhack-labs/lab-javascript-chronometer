//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  setInterval(function() {
    console.log(that.currentTime);
    that.currentTime += 1;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  var second = this.currentTime;
  var second2 = Math.floor(second / 60) * 60;
  var segundos = second - second2;
  return segundos;
};

Chronometer.prototype.twoDigitsNumber = function(a) {
  var twoDigits = "" + a;
  if (twoDigits < 10) {
    console.log(a);
    twoDigits = "0" + a;
    return twoDigits;
  } else if (twoDigits == 15) {
    twoDigits = "15";
    console.log(a);
    return twoDigits;
  }
};
Chronometer.prototype.setTime = function() {};

Chronometer.prototype.setMilliseconds = function() {};

Chronometer.prototype.stopClick = function() {};

Chronometer.prototype.resetClick = function() {};

Chronometer.prototype.splitClick = function() {};

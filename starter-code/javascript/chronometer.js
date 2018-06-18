// Constructor
  function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  }

Chronometer.prototype.startClick = function () {
  var i = 0;
  var that = this;
  this.intervalId = this.setInterval (function(){
  that.currentTime++;
  that.setTime();
  }, 1000);
  };

Chronometer.prototype.setMinutes = function () {
  return (Math.floor(this.currentTime/60));
  };

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
  };

Chronometer.prototype.twoDigitsNumber = function (setValue) {
  var string = "";
  if (setValue < 10) {
    string = "0" + setValue;
  } else {
    string = setValue.toString();
  }
  return string;
  };

Chronometer.prototype.setTime = function () {
  var minutos = this.twoDigitsNumber(this.setMinutes());
  var segundos = this.twoDigitsNumber(this.setSeconds());
  printTime(minutos, segundos);
  };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

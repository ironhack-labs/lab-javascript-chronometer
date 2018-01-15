// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.sec = 0;
  this.min = 0;
}

//context
Chronometer.prototype.startClick = function() {
  var that = this;
  that.intervalId = setInterval(function() {
    that.currentTime++;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  return parseInt(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function(number) {
  var aux = number + "";
  if (aux.length == 1) {
    aux = "0" + number;
  }
  return aux;
};

Chronometer.prototype.setTime = function () {
 var min = this.twoDigitsNumber(this.setMinutes());
 var sec = this.twoDigitsNumber(this.setSeconds());
 this.min = min;
 this.sec = sec;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
    this.min=0;
    this.sec=0;
};

// Chronometer.prototype.splitClick = function () {

// };

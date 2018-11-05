// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime = this.currentTime + 1
    console.log(this.currentTime)
    this.setTime()
  },1000)
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if(value < 10) {
    value = "0" + value
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.setMinutes()
  var seconds = this.setSeconds()
  minutes = this.twoDigitsNumber(minutes) 
  seconds = this.twoDigitsNumber(seconds)
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };

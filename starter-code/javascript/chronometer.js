// Constructor
function Chronometer() {
  this.currentTime = 0
  this.intervalId = ""
}

//Function that starts the clock
Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
    that.currentTime++
    that.setTime()
  }, 10)
};

//Function that sets the minutes
Chronometer.prototype.setMinutes = function () {
  return Math.floor((this.currentTime / 100) / 60)
};

//Function that sets the seconds
Chronometer.prototype.setSeconds = function () {
  return Math.floor((this.currentTime / 100) % 60)
};

//Function that returns a two digit number even if the input is < 10
Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number < 10) {
    return "0" + number
  }
  return "" + number
};

//Function that sets the time in two digits format
Chronometer.prototype.setTime = function () {
  this.minutes      = this.twoDigitsNumber(this.setMinutes())
  this.seconds      = this.twoDigitsNumber(this.setSeconds())
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds())
};

//Function that sets the milliseconds
Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100
};

//Function that starts the chronometer
Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
  this.intervalId = ""
};

//Function that resets the chronometer
Chronometer.prototype.resetClick = function () {
  this.currentTime = 0
};

//Function that returns a split time
Chronometer.prototype.splitClick = function () {
  return this.minutes + ':' + this.seconds + ':' + this.milliseconds
};

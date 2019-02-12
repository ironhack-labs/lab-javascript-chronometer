
function Chronometer() {
  this.currentTime = 0
  this.intervalId = null
  this.minutes = 0
  this.seconds = 0
  this.milliseconds = 0
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => { 
      this.currentTime += 1
      this.setTime()
      printTime()
  }, 10)
};

Chronometer.prototype.setMinutes = function () {
  var timeInMinutes = Math.floor(this.currentTime / 6000)
  return timeInMinutes
};

Chronometer.prototype.setSeconds = function () {
  var timeInSeconds = Math.floor(this.currentTime / 100) % 60
  return timeInSeconds
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  twoDigits = '' + value 
if (value <= 9) {
  twoDigits = '0' + twoDigits
}
return twoDigits.toString()
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes())
  this.seconds = this.twoDigitsNumber(this.setSeconds())
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds())
};

Chronometer.prototype.setMilliseconds = function () {
  var timeInMilliSeconds = this.currentTime % 100
  return timeInMilliSeconds
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0
  printTime()
};

Chronometer.prototype.splitClick = function () {
  return this.minutes + ":" + this.seconds + ":" + this.milliseconds
};
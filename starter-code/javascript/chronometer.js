//Constructor
function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0
  this.seconds = 0
  this.minutes = 0
}

Chronometer.prototype.startClick = function() {
  var chronos = this
  this.intervalId = setInterval(function() {
    chronos.currentTime++
    chronos.setTime()
  }, 1000)
}

Chronometer.prototype.getMinutes = function() {
  return Math.floor(this.currentTime / 60)
}

Chronometer.prototype.getSeconds = function() {
  return Math.floor(this.currentTime % 60)
}

Chronometer.prototype.twoDigitsNumber = function(value) {
  if (value < 10) {
    return '0' + value
  } else {
    return '' + value
  }
}

Chronometer.prototype.setTime = function() {
  this.seconds = this.twoDigitsNumber(this.getSeconds())
  this.minutes = this.twoDigitsNumber(this.getMinutes())
}

Chronometer.prototype.setMilliseconds = function() {}

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId)
}

Chronometer.prototype.resetClick = function() {}

Chronometer.prototype.splitClick = function() {}

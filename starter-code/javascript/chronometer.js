function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime++
  }, 1000)
}

Chronometer.prototype.getMinutes = function () {
  return Math.floor(this.currentTime / 60)
}

Chronometer.prototype.getSeconds = function () {
  return ((this.currentTime) - (Math.floor(this.currentTime / 60) * 60))
}

Chronometer.prototype.getMilliseconds = function () {
  return 90
}

Chronometer.prototype.twoDigitsNumber = function (numInput) {
  return ("0" + numInput).slice(-2)
}

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
}

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0
  this.intervalId = 0
  clearInterval()

}


function Chronometer() {
  this.currentTime = 0
  this.currentMs = 0
  this.intervalId = 0
  this.interValId2 = 0

  // constructor() {}
  this.startClick = function () {
    this.intervalId = setInterval(() => {
      return this.currentTime++
    }, 1000)
    this.interValId2 = setInterval(() => {
      return this.currentMs++
    }, 1)
  }

  this.getMinutes = function () {
    return parseInt((this.currentTime / 60))
  }
  this.getSeconds = function () {
    return parseInt((this.currentTime % 60))
  }
  this.getMilliseconds = function () {
    return this.currentMs % 100
  }
  this.twoDigitsNumber = function (timeValue) {
    if (timeValue < 10) {
      return ('0' + timeValue).toString()
    }
    return timeValue.toString()
  }
  this.stopClick = function () {
    clearInterval(this.intervalId)
    clearInterval(this.interValId2)
  }
  this.resetClick = function () {
    this.currentTime = 0
    this.currentMs = 0
  }
}
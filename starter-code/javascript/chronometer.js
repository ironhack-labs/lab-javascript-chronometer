//Constructor
var minutes,seconds,milliseconds 

function Chronometer() {
    this.currentTime = 0
    this.intervalId = "counter"
}

Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval (function () {
        that.currentTime++
        that.setTime()
        printMinutes()
        printSeconds()
        printMilliseconds()

    }, 10)
};

Chronometer.prototype.setMinutes = function () {
  var mins = this.currentTime / 6000
  return Math.floor(mins)
};

Chronometer.prototype.setSeconds = function () {
    var segs = (this.currentTime / 100) % 60
    return Math.floor(segs)
};

Chronometer.prototype.setMilliseconds = function () {
    var milisegs = this.currentTime % 100
    return milisegs
};

Chronometer.prototype.twoDigitsNumber = function (value) {
      var valueStr = value.toString()
      if (valueStr.length < 2){
          valueStr = "0" + valueStr
      }
      return valueStr   
};

Chronometer.prototype.setTime = function () {
     minutes = this.twoDigitsNumber(this.setMinutes())
     seconds = this.twoDigitsNumber(this.setSeconds())
     milliseconds = this.twoDigitsNumber(this.setMilliseconds())
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };

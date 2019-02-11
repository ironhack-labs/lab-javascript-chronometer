//Constructor
var minutes,seconds 

function Chronometer() {
    this.currentTime = 0
    this.intervalId = ""
}

Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval (function () {
        that.currentTime++
        that.setTime()
        printMinutes()
        printSeconds()

    }, 1000)
};

Chronometer.prototype.setMinutes = function () {
  var mins = this.currentTime / 60
  return Math.floor(mins)
};

Chronometer.prototype.setSeconds = function () {
    var segs = this.currentTime % 60
    return segs
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

// Constructor
function Chronometer() {
this.currentTime = 0
this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
  this.intervalId =  setInterval ( () => {
    this.currentTime++
    this.setTime()
  }, 1000)
}

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime%60)
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  let twoDig = value.toString()
  if (value < 10) {
    return "0" + twoDig
  } else {
    return twoDig
  }
};

Chronometer.prototype.setTime = function () {
  let minutes = this.twoDigitsNumber( this.setMinutes() )
  let seconds = this.twoDigitsNumber( this.setSeconds() )
  printTime(seconds, minutes)
  let complete = minutes + ":" + seconds
  printSplit(complete)
}


Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
  this.intervalId = 0
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.splitClick = function () {

};


function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}
Chronometer.prototype.startClick = function () {
  var that = this

  this.intervalId = setInterval(function (){
    
    that.setTime()
    that.currentTime++;
    
  }, 1000);
  
};


Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  var minutesSeconds = (Math.floor(this.currentTime/60))*60;
  return this.currentTime - minutesSeconds;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  var timeString = time.toString();
  if (timeString >= 10){
    return timeString
  } else {
    return "0" + timeString
  }
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

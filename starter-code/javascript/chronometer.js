// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function() {
        that.currentTime++;
        that.setTime();
        console.log(that.currentTime);
    }, 1000);

    return that.currentTime;
};

Chronometer.prototype.setMinutes = function () {
  var timeInMinutes = Math.floor(this.currentTime / 60);
  return timeInMinutes;
};

Chronometer.prototype.setSeconds = function () {
  var minutes = this.setMinutes();
  var seconds = this.currentTime - minutes * 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    var twoDigits = String(value);
  if(twoDigits.length === 1) {
    twoDigits = "0" + twoDigits;
  } 
    return twoDigits;
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var time = minutes + ":" + seconds;

    return time;
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

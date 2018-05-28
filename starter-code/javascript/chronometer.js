function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.milliseconds = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  var x = 0;
  this.intervalId = setInterval(function() {
    that.setTime();
    x++
    if (x > 99) {
      that.currentTime++;
      x = 0;
    }
  that.milliseconds++;
  if (that.milliseconds > 99)
    that.milliseconds = 0;
  }, 10);
}



Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  return (this.currentTime == 0 ? 0 : this.currentTime - (60 * this.setMinutes()));
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  return (n >= 10 ? "" + n : "0" + n )
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.setMinutes();
  this.seconds = this.setSeconds();
  document.getElementById('minDec').innerText = this.twoDigitsNumber(this.minutes)[0];
  document.getElementById('minUni').innerText = this.twoDigitsNumber(this.minutes)[1];
  document.getElementById('secDec').innerText = this.twoDigitsNumber(this.seconds)[0];
  document.getElementById('secUni').innerText = this.twoDigitsNumber(this.seconds)[1];
  document.getElementById('milDec').innerText = this.twoDigitsNumber(this.milliseconds)[1];
  document.getElementById('milUni').innerText = this.twoDigitsNumber(this.milliseconds)[0];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.milliseconds = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

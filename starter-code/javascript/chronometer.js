// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var me = this;

  function incrementTime() { me.currentTime++; }
  me.intervalId = setInterval(function () {
    incrementTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime / 6000);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = ((this.currentTime - (this.setMinutes() * 6000)) / 100);
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  return number.toLocaleString('en-US', { minimumIntegerDigits: 2 });
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes()).slice(0, 2);
  var seconds = this.twoDigitsNumber(this.setSeconds()).slice(0, 2);
  var milliseconds = this.twoDigitsNumber(this.setMilliseconds()).slice(-2);
  return `${ minutes }:${ seconds }:${ milliseconds }`;
};

Chronometer.prototype.setMilliseconds = function () {
  if ((this.currentTime % 100) === 0) {
    return 0;
  }
  return this.currentTime;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

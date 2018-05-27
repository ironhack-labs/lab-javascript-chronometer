// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.startDate = 0;
  this.currentDate = 0;
  this.splitArr = [];
  this.intervalId = 0;
}

Chronometer.prototype.showTime = function () {
  console.log(this.setTime());
};

Chronometer.prototype.startClick = function () {
  var me = this;
  me.startDate = Date.now();
  function incrementTime() {
    if ((me.currentDate - me.startDate) > 999) {
      me.currentTime++;
      me.startDate = Date.now();
    }
  }
  me.intervalId = setInterval(function () {
    // me.startDate = Date.now();
    incrementTime();
    me.currentDate = Date.now();
    // me.setTime();
  }, 1);
};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime - (this.setMinutes() * 60);
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  return number.toLocaleString('en-US', { minimumIntegerDigits: 2 });
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes()).slice(0, 2);
  var seconds = this.twoDigitsNumber(this.setSeconds()).slice(0, 2);
  var milliseconds = this.twoDigitsNumber(this.setMilliseconds()).slice(0, 2);
  return `${ minutes }:${ seconds }:${ milliseconds }`;
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentDate - this.startDate;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.startDate = 0;
  this.currentDate = 0;
};

Chronometer.prototype.splitClick = function () {
  this.splitArr.push(setTime);
};

// chrono = new Chronometer();
// chrono.startClick();
// setInterval(chrono.showTime.bind(chrono));

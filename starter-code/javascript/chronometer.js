// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  setInterval(function(){
  that.currentTime++;
  that.setTime(that.currentTime);
 }, 1000)
};

Chronometer.prototype.setMinutes = function () {
    return Math.trunc(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if(number < 10) {
    return ("0" + number);
  }
  return number.toString();
};

Chronometer.prototype.setTime = function () {
  var minutes = this.setMinutes;
  var seconds = this.setSeconds;
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.currentTime);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};

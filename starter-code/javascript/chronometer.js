// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  console.log(this.currentTime);
  setInterval(function(){
  that.currentTime++;
  that.setTime();
 }, 1000)
};

Chronometer.prototype.setMinutes = function () {
    return Math.trunc(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  console.log(number);
  if(true) {
    return number;
  }
  return number.toString();
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
  var seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
  var hora = minutes + " " + seconds;
  return hora;
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
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";
}

Chronometer.prototype.startClick = function () {
  
  this.intervalId = setInterval((function(){
    this.currentTime++;
    this.setTime();
  }).bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  var stringValue = value.toString();
  
  return (stringValue.length === 1) ? "0" + stringValue : stringValue;
};

Chronometer.prototype.setTime = function () {
  var Minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};

new Chronometer ();
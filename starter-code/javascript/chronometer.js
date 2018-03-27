// Constructor

function Chronometer() {
  this.intervalId = null;
  this.currentTime = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
    that.currentTime += 1;
  }, 1000)
};

Chronometer.prototype.setMinutes = function () {
    this.minutes = this.currentTime / 60;
    return Math.floor(this.minutes);
};

Chronometer.prototype.setSeconds = function () {
  if (this.currentTime > 60) {
    this.seconds = this.currentTime % 60;
  } else {
    this.seconds = this.currentTime;
  }
  return this.seconds;
};

Chronometer.prototype.twoDigitsNumber = function () {
  /*if (this.minute < 10) {
    this.minute = "0" + this.minute.toString();
    return this.minute;

    I think I'm overthinking things. Better not break the code with it and see on the exercise review.
    */
  }
};

Chronometer.prototype.setTime = function () {
  // Need twoDigitsNumber to do this one...
};

Chronometer.prototype.setMilliseconds = function () {
  this.milliseconds = this.currentTime * 100;
  return this.milliseconds;
};

Chronometer.prototype.stopClick = function () {
 var that = this;
  clearInterval(that.intervalId)
};

Chronometer.prototype.resetClick = function () {
this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
//Too complicated for me right now. I'd love to see it on the exercise review
};

function main() {








};
main();
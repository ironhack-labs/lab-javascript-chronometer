//Constructor
function Chronometer() {
  this.currentTime=0;
  this.intervalId=0;
  this.minutes = 0
  this.seconds =0
}

Chronometer.prototype.startClick = function () {
  var self = this
  this.intervalId = setInterval(function(){
    self.currentTime += 1
    self.setTime()
  },1000)
};

Chronometer.prototype.setMinutes = function () {
  var self = this
  var minutes = self.currentTime / 60
  return Math.floor(minutes)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime - (this.setMinutes()*60)
};

Chronometer.prototype.twoDigitsNumber = function (x) {
  if(x < 10) return '0' + x
  return x
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes())
  this.seconds = this.twoDigitsNumber(this.setSeconds())
  printTime()
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime=0
  this.minutes="00"
  this.seconds="00"
  printTime()
};

Chronometer.prototype.splitClick = function () {

};

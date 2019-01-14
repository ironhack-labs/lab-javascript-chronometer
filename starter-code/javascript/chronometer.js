// Constructor
 function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.milisec = 0;
  this.intervalMil = 0

}

Chronometer.prototype.startClick = function () {
 var that = this;
this.intervalId = setInterval(function(){
  that.currentTime++;
  time = that.setTime(that.currentTime);
  printMinutes(time)
  printSeconds(time)
 }, 1000)

 this.intervalMil = setInterval(function(){
  that.milisec++
  militime = that.twoDigitsNumber(that.setMilliseconds(that.milisec))
  printMilliseconds(militime)
 },10)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if (time < 10){
    return "0" + time;
  }
  return String(time);
};

Chronometer.prototype.setTime = function (time) {
  var minutes = this.twoDigitsNumber(this.setMinutes(time));
  var seconds = this.twoDigitsNumber(this.setSeconds(time));
  return [minutes, seconds]
};

Chronometer.prototype.setMilliseconds = function (mili) {
  return mili % 100


};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.intervalMil);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

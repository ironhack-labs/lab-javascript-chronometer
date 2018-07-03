// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var self = this;
  this.intervalId = setInterval(function(){
    self.currentTime++;
    self.setTime();
  },1000);
};

Chronometer.prototype.setMinutes = function () {
  var seconds = this.currentTime,
      minutes = parseInt(seconds/60);

  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var minutes = this.setMinutes();
  var seconds = this.currentTime-(minutes*60);
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (digits) {
  var dstring = "0";
  var result = digits.toString();

  if(result.length < 2){
     result = dstring+result;
  }
  return result;
};

Chronometer.prototype.setTime = function () {
  var minutes = this.setMinutes();
  var seconds = this.setSeconds();
  
  minutes = this.twoDigitsNumber(minutes);
  seconds = this.twoDigitsNumber(seconds);

  var time = [minutes,seconds];
  return time;
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.stopClick();
};

Chronometer.prototype.splitClick = function () {

};

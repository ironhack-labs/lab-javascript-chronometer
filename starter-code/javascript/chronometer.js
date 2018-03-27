// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var self = this;
  var callbackFunction = function (){
    self.currentTime++ 
  };
  intervalID = window.setInterval(callbackFunction, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60 ;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  // var seconds = this.currentTime % 60;
  // var twoDigitsString;
  if (time === 0){
    return '00';
  } else if (time < 10) {
    return '0' + time;
  } else {
    return time +'';
  }
};

Chronometer.prototype.setTime = function () {
    
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

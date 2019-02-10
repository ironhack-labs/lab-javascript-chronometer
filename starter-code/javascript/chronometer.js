// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.milliSeconds = 0;
  this.intervalMili = 0;
  this.startClick;
  this.setMinutes;
  this.setSeconds;
  this.twoDigitsNumber;
  this.setTime;
  this.resetClick;
  this.clearInterval;  
}

Chronometer.prototype.startClick = function () {
    chronometer.intervalId = setInterval(function () {
    
    chronometer.currentTime++;
    
    chronometer.setTime();
    
  }, 1000);
  chronometer.intervalMili = setInterval(function () {
    
    chronometer.milliSeconds++;
    
    if (chronometer.milliSeconds === 99){
      chronometer.milliSeconds = 0
    }
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  
  var minutes = Math.floor(this.currentTime/60);
  return minutes;
  
};

Chronometer.prototype.setSeconds = function () {
  var minutes = Math.floor(this.currentTime/60);

  var seconds = this.currentTime - (minutes*60);

  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  if (n <= 9){
  var digits = n.toString(10);
  digits = "0" + digits;
  return digits;
  }
  else {return n.toString(10);}

};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var miliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
  var miliseconds = this.milliSeconds;
  return miliseconds;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(chronometer.intervalId);
  clearInterval(chronometer.intervalMili);
};

Chronometer.prototype.resetClick = function () {
  chronometer.currentTime = 0;
  chronometer.milliSeconds = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

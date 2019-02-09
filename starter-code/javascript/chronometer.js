// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;  
}

Chronometer.prototype.startClick = function () {
    intervalId = setInterval(function () {
    
    chronometer.currentTime++
    
    chronometer.setTime();
    
  }, 1000);
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
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(chronometer.intervalId);
};

Chronometer.prototype.resetClick = function () {
  chronometer.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

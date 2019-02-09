// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;  
}

Chronometer.prototype.startClick = function () {
    intervalId = setInterval(function () {
    
    chronometer.currentTime++
    
  
    
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(chronometer.currentTime/60);
  return minutes;
  
};

Chronometer.prototype.setSeconds = function () {
  var minutes = Math.floor(chronometer.currentTime/60);

  var seconds = chronometer.currentTime - (minutes*60);

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
  var minutes = twoDigitsNumber(setMinutes());
  var seconds = twoDigitsNumber(setSeconds());
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

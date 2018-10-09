// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
//initialiser toutes les autres variables : this.min, this.sec...
}

Chronometer.prototype.timeHandler = function() {
  this.currentTime += 1; //sec
  //setTime method should be called on every interval of the setInterval
  this.setTime();
  console.log(this.currentTime);
};

//bind !
//setInterval appelle une fonction, ici timeHandler !
Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(this.timeHandler.bind(this), 1000);
  
};

Chronometer.prototype.setMinutes = function(currentTime) {
  this.min = Math.floor(this.currentTime / 60);
  return this.min;
};

Chronometer.prototype.setSeconds = function(currentTime) {
  this.sec = this.currentTime % 60;
  return this.sec;
};

Chronometer.prototype.twoDigitsNumber = function(number) {
  if (number < 10) {
    return "0" + number;
  } else return "" + number;
};

Chronometer.prototype.setTime = function(currentTime) {
  var digitMin = twoDigitsNumber(setMInutes(this.currentTime));
  var digitSec = twoDigitsNumber(setSeconds(this.currentTime));
  return digitMin + digitSec;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

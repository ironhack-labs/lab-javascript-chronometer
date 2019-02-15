// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = 0;
}

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes)
};

Chronometer.prototype.startClick = function () {
  this.currentTime += 1;
  setInterval(setTime, 1000);
};

Chronometer.prototype.setMinutes = function () {    
  
  return parseInt(this.currentTime / 60);

 };

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (num) {

  var myNum = ''+ num;
  if ( num < 10 ){
    myNum = '0' + myNum;
  }
  return myNum;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

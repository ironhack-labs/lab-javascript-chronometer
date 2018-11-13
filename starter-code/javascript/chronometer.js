// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() =>{
    this.currentTime ++
  }, 1000);
  spy

};

Chronometer.prototype.setMinutes = function () {
  
  this.intervalId = Math.floor(this.currentTime / 60) ;

  return this.intervalId
};

Chronometer.prototype.setSeconds = function () {
  this.intervalId = this.currentTime % 60;
  return this.intervalId;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  return ("0" + number).slice(-2)
};

 Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

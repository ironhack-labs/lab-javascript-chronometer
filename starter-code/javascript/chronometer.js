// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function () {
    that.currentTime += 1;
  }, 1000);


};

Chronometer.prototype.setMinutes = function () {
 var setMinutes = this.currentTime;
    if (this.currentTime >= 60) {
      return 1; 
    }
  };

Chronometer.prototype.setSeconds = function () {

};


// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

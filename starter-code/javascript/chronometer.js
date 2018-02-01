// Constructor
//display current time and interval ID
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    //'this' needs to be declared to reference 
    //chronometer function
    var that = this; 
    // every second, currentTime will increment 1
    // to represent seconds
    var intervalId = setInterval(function (){ 
     // increment current time
     that.currentTime ++;
     //setTime() called
     that.setTime();
  }, 1000)
};

//val as argument to pass in to argument
Chronometer.prototype.setMinutes = function (val) {
  //returns the integer of current time / 60
  // which would be hours 
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  //return the remainder of current time
  //remainder will be equal to seconds
  return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  //if value is less than 10, add a 0 in front to make 
  //it a two digit value. If not, parse the value to
  //become a 2 digit string
  return (value < 10) ? ("0" + value) : String(value);
};

Chronometer.prototype.setTime = function () {
  var seconds = this.twoDigitsNumber(this.setSeconds);
  var minutes = this.twoDigitsNumber(this.setMinutes);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

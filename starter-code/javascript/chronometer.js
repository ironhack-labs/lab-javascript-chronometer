// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  function sumar1(){
    that.currentTime++;
    console.log(that.currentTime)
  }
  this.intervalId = setInterval(sumar1, 1000) 
};

var chronometer1 = new Chronometer();
//chronometer1.startClick();
console.log("intervalId"+ chronometer1.intervalId);


Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return parseInt(this.currentTime %60);
  
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

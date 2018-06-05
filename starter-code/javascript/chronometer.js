// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
  this.minutes = "00";
  this.seconds = "00";
  };

// currentTime method
Chronometer.prototype.currentTime = function() {
  return this.currentTime();
};

// intervalId method
Chronometer.prototype.intervalId = function() {
  return toBeDefined();
};

// Starclick fonction
Chronometer.prototype.startClick = function() {
  //arrow functions
  this.intervalId = setInterval(() => {
    this.currentTime +=1;
    this.setTime();
  },1000);
};

//intervalId = new setInterval


// Chronometer.prototype.setMinutes = function () {
Chronometer.prototype.setMinutes = function() {  
  return Math.floor(this.currentTime/60);
};

// Chronometer.prototype.setSeconds = function () {
Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime % 60);
};


// Chronometer.prototype.twoDigitsNumber = function () {
  Chronometer.prototype.twoDigitsNumber = function (value) {
    return (value < 10) ? "0" + value : ""+value;
    // if first cond is true, return value; if false return the second; 
    // ""+value = value.toString
};

// Chronometer.prototype.setTime = function () {
  Chronometer.prototype.setTime = function () {  
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

// Chronometer.prototype.resetClick = function () {
  Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
  };

Chronometer.prototype.splitClick = function () {

};

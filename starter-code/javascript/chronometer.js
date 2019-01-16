// Constructor
function Chronometer() {
  this.currentTime = 55; // Don't forget to change it!!!!!
  this.intervalId = 0;
  this.minute = 0;
  this.second = 0;
  // this.splitText;
}


Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval((function() {
    this.currentTime++;
    this.setTime();
    printTime();
  }).bind(this),1000);
  return;
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
  // return (this.currentTime - this.currentTime % 60) / 60 ;
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;  
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if(time < 10) {
    return "0" + time.toString();
  } else {
    return time.toString();
  }
};

Chronometer.prototype.setTime = function () {
  this.minute = this.twoDigitsNumber(this.setMinutes());
  this.second = this.twoDigitsNumber( this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minute = 0;
  this.second = 0;
};

Chronometer.prototype.splitClick = function () {
    return this.minute + ":" + this.second;
};



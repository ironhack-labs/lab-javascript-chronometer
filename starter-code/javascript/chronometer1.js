// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = "00";
  this.seconds = "00";
  this.milliseconds = "00";
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(()=>{
    this.currentTime += 1 ;
    this.setTime();
    printMinutes();
    printSeconds();
  },1000)
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime/60);
  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value === 0) {
    return "00";
  } else if (value < 10) {
    return "0" + value;
  } else {
    return ""+ value;
  }
  
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.minutes = "00";
  this.seconds = "00";
  printMinutes();
  printSeconds();
  clearSplits();
};

Chronometer.prototype.splitClick = function () {
  printSplit();
};

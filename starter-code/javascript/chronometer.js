// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
    this.seconds;
}

Chronometer.prototype.startClick = function () {
    var chronos = this;
    this.intervalId = setInterval(function(){
    chronos.currentTime++;
    chronos.setTime();
  },1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime);
  };

Chronometer.prototype.setSeconds = function () {
  return Math.floor((this.currentTime))
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value<10){
    return "0" + value;
  }else{
    return "" + value;
  }
};

Chronometer.prototype.setTime = function () {
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

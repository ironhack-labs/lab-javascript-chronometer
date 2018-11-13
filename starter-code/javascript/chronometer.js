// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    
}
  
  Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.setTime();
      this.stopClick();
    }, 1000);
    
  };
  
  Chronometer.prototype.setMinutes = function () {
    
    this.intervalId = Math.floor(this.currentTime/60);
    return this.intervalId;
  };
  
  Chronometer.prototype.setSeconds = function () {
    this.intervalId = this.currentTime % 60;
    return this.intervalId;
  };
  
  Chronometer.prototype.twoDigitsNumber = function (number) {
      return ("0" + number).slice(-2);
  
  };
  
  Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes())
    this.seconds = this.twoDigitsNumber(this.setSeconds())
  };
  
Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100;
};
  
  Chronometer.prototype.stopClick = function () {
    clearInterval(this.clearInterval)
  };
  
  Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
  };
  
  // Chronometer.prototype.splitClick = function () {
  
  // };

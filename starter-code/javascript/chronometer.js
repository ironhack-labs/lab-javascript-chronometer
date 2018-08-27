// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.ourMin = 0;
  this.ourSec = 0;
  this.milli = 0;
  }
  
  Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval(function(){
      that.currentTime += 1; 
      that.setTime();
    },1000);
  } 
  
  Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  };
  
  Chronometer.prototype.setSeconds = function () { 
    return this.currentTime - this.setMinutes() * 60;
    
  };
  
  Chronometer.prototype.twoDigitsNumber = function(value) {
    if(value < 10){
      return "0" + value;
    }
    return value.toString();
  };
  
  Chronometer.prototype.setTime = function () {
    this.ourMin = this.twoDigitsNumber(this.setMinutes());
    this.ourSec = this.twoDigitsNumber(this.setSeconds());
    this.milli = this.twoDigitsNumber(this.setMilliseconds());
  };
  
  Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime * 1000;
  };
  
  Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
  };
  
  Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
  };
  
  Chronometer.prototype.splitClick = function () {
  
  };
// Constructor
function Chronometer () {
    this.currentTime = 0, // no of seconds elapsed while chrono is ON
    this.intervalId=0;
  };
    
Chronometer.prototype.startClick = function() {
  var self = this;
  this.intervalId = setInterval(function() {
    self.currentTime++;
    self.setTime();
  }, 10);
};
    
Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/6000);  
};
    
Chronometer.prototype.setSeconds = function () {
  return Math.floor((this.currentTime%6000)/100);
};
    
Chronometer.prototype.twoDigitsNumber = function (a) {
  if (a<10) {
    return "0"+a;
  } else {
  return ""+a;
  }
};

Chronometer.prototype.setTime = function () {
  var self = this;
  setInterval( function(){
    self.twoDigitsNumber(self.setMinutes);
    self.twoDigitsNumber(self.setSeconds);
  }, 1000);
};
    
Chronometer.prototype.setMilliseconds = function () {
  return Math.floor((this.currentTime%100));
};
    
Chronometer.prototype.stopClick = function() {
  
  clearInterval(this.intervalId);
};
    
Chronometer.prototype.resetClick = function () {
  this.currentTime=0;
};
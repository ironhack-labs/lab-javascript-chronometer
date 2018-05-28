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
  }, 1000);
};
    
Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);  
};
    
Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60;
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
  var self = this;
  var seconds1 = Math.floor(self.currentTime/10) % 10;
    var seconds10 = Math.floor(self.currentTime/100)% 10;
    document.getElementById("milUni").innerText = seconds1;
    document.getElementById("milDec").innerText = seconds10;
};
    
Chronometer.prototype.stopClick = function() {
  
  clearInterval(this.intervalId);
};
    
Chronometer.prototype.resetClick = function () {
  this.currentTime=0;
};
    
// Chronometer.prototype.splitClick = function () {

// };
    
// var chrono = new Chronometer();

// document.getElementById("btnLeft").onclick = 
// function(){
//   chrono.startClick();
// };

// document.getElementById("btnRight").onclick = 
// function(){
//   chrono.stopClick();
// }
// Constructor
function Chronometer ()  {
    this.currentTime = 0;
    this.intervalId = null;
}

Chronometer.prototype.startClick = function () {
   var self = this;
   self.intervalId = window.setInterval(function(){
    self.currentTime += 1;
   }, 1000);
}

 Chronometer.prototype.setMinutes = function () {
    var self = this;
    return Math.floor(self.currentTime / 60);
 };

 Chronometer.prototype.setSeconds = function () {
    var self = this;
    self.currentTime = self.currentTime % 60;
    return self.currentTime;
 };

 Chronometer.prototype.twoDigitsNumber = function () {
    var self = this;
    var minutes = self.setMinutes();
    if (minutes < 10) {
        return '0'  + minutes;
    }
    else{
        return toString(minutes);
    }
 };

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

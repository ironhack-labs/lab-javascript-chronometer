// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;

 }

 Chronometer.prototype.startClick = function () {
    var self = this;

    self.intervalId = window.setInterval(function() {
        self.currentTime += 1;
        self.setTime(); 
    }, 1000)
 };

 Chronometer.prototype.setMinutes = function () {
    var self = this;
    var minutes = Math.floor(self.currentTime/60);
    return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var self = this;
    var seconds = self.currentTime % 60;
    return seconds;
 };

 /*function twoDigitsNumber(value){
      return value.padStart(2, "0");
 }*/

 Chronometer.prototype.twoDigitsNumber = function (value) {
    return ("0" + value).slice(-2);
 };

 Chronometer.prototype.setTime = function () {
    var self = this;
     var minutes = self.twoDigitsNumber(self.setMinutes());
     var seconds = self.twoDigitsNumber(self.setSeconds());

 };

// Chronometer.prototype.setMilliseconds = function () {
var self = this;
// };

 Chronometer.prototype.stopClick = function () {
    var self = this;
    clearInterval(self.intervalId);
};

 Chronometer.prototype.resetClick = function () {
var self = this;

     self.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {
var self = this;
// };

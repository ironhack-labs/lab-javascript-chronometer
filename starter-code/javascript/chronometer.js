/Constructor 
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0 ;
 }

Chronometer.prototype.startClick = function () {
  var self = this;
  this.intervalId = setInterval(function () {
   self.currentTime++;
   console.log(self.currentTime)
  }, 1000)
};  



 Chronometer.prototype.setMinutes = function () {
  var self = this
  return Math.floor(this.currentTime / 60);
 };
 
 Chronometer.prototype.setSeconds = function () {
  var self = this;

 };

 Chronometer.prototype.twoDigitsNumber = function () {
  var self = this;
  
 };

 Chronometer.prototype.setTime = function () {
  var self = this;
 };

 Chronometer.prototype.setMilliseconds = function () {
  var self = this;
 };

 Chronometer.prototype.stopClick = function () {
  var self = this;
 };

 Chronometer.prototype.resetClick = function () {
  var self = this;
 };

 Chronometer.prototype.splitClick = function () {
  var self = this;
 };

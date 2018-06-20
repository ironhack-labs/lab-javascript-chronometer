// Constructor
function Chronometer() {
this.currentTime = 0
this.intervalId = 0

}
//startClick()
Chronometer.prototype.startClick = function () {
  var self = this;
  this.intervalId = setInterval(function () {
  self.currentTime++
  self.setTime();
},1000);
}
   

//setMinutes()
 Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime / 60) 
  return minutes
 };
//setSeconds()
Chronometer.prototype.setSeconds = function (minutes) {
  var seconds = Math.floor(this.currentTime - (minutes * 60))
  return seconds  
};
//twoDigitsNumber()
Chronometer.prototype.twoDigitsNumber = function (value) { 
      return ("0" + value).slice(-2)

};

//setTime()
Chronometer.prototype.setTime = function () {
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  var minutes = this.twoDigitsNumber(this.setMinutes());

};

// Chronometer.prototype.setMilliseconds = function () {

// };
 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

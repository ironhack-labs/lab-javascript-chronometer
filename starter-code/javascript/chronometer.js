// Constructor
 function Chronometer() {
   this.currentTime = 0
   this.intervalId = 0
  
}

 Chronometer.prototype.startClick = function() {
  var that = this
    that.intervalId = setInterval(function(){
    that.currentTime ++
    that.setTime(that.currentTime)
  },1000);

 };

 Chronometer.prototype.setMinutes = function() {
   return parseInt(this.currentTime / 60) 
  
 };

 Chronometer.prototype.setSeconds = function () {
    return parseInt(this.currentTime % 60) 
 };

 Chronometer.prototype.twoDigitsNumber = function (digits) {
    if (digits < 10) {
      return "0" + digits 
    } else {
      return digits + ""
    } 
 };
   
 Chronometer.prototype.setTime = function (currentTime) {
    var minutes = "00"
    var seconds = "00"
    minutes = this.twoDigitsNumber(this.setMinutes())
    seconds = this.twoDigitsNumber(this.setSeconds())
    return minutes+seconds

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {

  clearInterval(this.intervalId)
  
 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
 };

// Chronometer.prototype.splitClick = function () {

// };

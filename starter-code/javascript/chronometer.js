// Constructor
function Chronometer() {
  this.currentTime = 0,
  this.intervalId = ""
}

Chronometer.prototype.startClick = function() {
  var that = this;
  that.intervalId = setInterval(function() {
    that.currentTime++;
  }, 1000);
};

// document.getElementById("btnLeft").onclick = function() {
//   chronometer.startClick();
// };


Chronometer.prototype.setMinutes = function() {
    return Math.floor(this.currentTime / 60);
  };



 Chronometer.prototype.setSeconds = function () {
  return this.currentTime - (Math.floor(this.currentTime / 60)*60);
 };

Chronometer.prototype.twoDigitsNumber = function (val) {
  if(typeof val == 'undefined'){
    return "00";
  }
  val = toString(val);
  if(val.length == 1){
    return "0" + val;
  }else{
    return val;
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

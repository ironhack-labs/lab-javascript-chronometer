// Constructor
// function Chronometer() {
function Chronometer (){
  this.currentTime = 0;
  this.intervalId =0;
}
// }

// Chronometer.prototype.startClick = function () {
  Chronometer.prototype.startClick = function(){
    var that = this;
    this.IntervalId = setInterval(function(){
    that.currentTime = that.currentTime + 1
    that.setTime();
 }, 1000);
};

// };

// Chronometer.prototype.setMinutes = function () 
  Chronometer.prototype.setMinutes = function(){
   return Math.floor(this.currentTime/60);
  }
// };

// Chronometer.prototype.setSeconds = function () {
  Chronometer.prototype.setSeconds = function(){
    return (this.currentTime%60);
  }
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  Chronometer.prototype.twoDigitsNumber = function (value){
    var twoDigitsNumber = "";
    if (value<=9){
    twoDigitsNumber = "0" + value;
    }
    else {
    twoDigitsNumber = value.toString();
  }
    return twoDigitsNumber
}
// };

// Chronometer.prototype.setTime = function () {
Chronometer.prototype.setTime = function(){
var minutes = this.currentTime/60;
var seconds = this.currentTime%60;

}
// };


// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
clearInterval (this.intervalId);
};
// };

Chronometer.prototype.resetClick = function () {
return this.currentTime=0;
}
// };

// Chronometer.prototype.splitClick = function () {

// };

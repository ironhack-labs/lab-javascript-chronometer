// Constructor
 function Chronometer() {
     this.currentTime = 0;
     this.intervalId = 0;

 }

 Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function(){
    that.currentTime++;
    that.setTime()
 },1000)
 }
 Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
 };

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
 };

Chronometer.prototype.twoDigitsNumber = function (value) {
if(value < 10) {
    return "0" + value;
}
else{
    return value.toString();
}


}

 

 Chronometer.prototype.setTime = function () {

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

 Chronometer.prototype.resetClick = function () {

 };

// Chronometer.prototype.splitClick = function () {

// };

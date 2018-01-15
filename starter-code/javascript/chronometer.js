// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

 Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
     that.currentTime += 1;
     that.setTime();
  },1000);
 };

Chronometer.prototype.setMinutes = function () {
  this.currentTimeMin = this.currentTime / 60;
  return Math.floor(this.currentTimeMin);
};

Chronometer.prototype.setSeconds = function () {
  this.currentTimeSg = this.currentTime % 60;
  return this.currentTimeSg;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var stringNumber = "" + number;
   if(stringNumber.length < 2){
     stringNumber = "0" + stringNumber;
   }return stringNumber;
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
 
  return [minutes,seconds];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function (intervalId) {
  clearInterval(intervalId);
  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

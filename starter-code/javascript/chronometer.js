var minutes = 0;
var seconds = 0;
// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() =>{
        this.currentTime+=1;
        this.setTime();
        printMinutes();
        printSeconds();
    },1000);
 };

 Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
 };

 Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

 Chronometer.prototype.twoDigitsNumber = function (x) {
  if(x < 10){
      return "0" + x;
  }
  if(x === 15){
    return "15";
  }
 };

 Chronometer.prototype.setTime = function () {
    minutes = this.twoDigitsNumber(this.setMinutes());
    seconds = this.twoDigitsNumber(this.setSeconds());
 };

 Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.currentTime);
};

 Chronometer.prototype.resetClick = function () {

 };

 Chronometer.prototype.splitClick = function () {

};

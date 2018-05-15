 //Constructor
 function Chronometer() {
    this.currentTime= 0;
    this.intervalId = 0;
   
};

Chronometer.prototype.startClick = function () {
      var that = this;
      that.intervalId= setInterval(function(){
      that.currentTime ++;
      that.setTime();
      
  }, 1000);


 };

 Chronometer.prototype.setMinutes = function () {
   return parseInt(this.currentTime / 60);
 };

 Chronometer.prototype.setSeconds = function () {
  return parseInt(this.currentTime % 60);
 };

 Chronometer.prototype.twoDigitsNumber = function (value1) {
    if (value1 < 10){
        return "0" + value1;
    }
    return value1.toString();
};

 Chronometer.prototype.setTime = function () {
   var min = this.twoDigitsNumber(this.setMinutes());
   var sec = this.twoDigitsNumber(this.setSeconds());
 };

 Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
    clearInterval(this.currentTime);
 };

 Chronometer.prototype.splitClick = function () {

 };

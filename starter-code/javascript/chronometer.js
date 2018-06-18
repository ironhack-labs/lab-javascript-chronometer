// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval(function (){
        parseInt(that.currentTime++);
        that.setTime();
    }, 1000);
 };

 Chronometer.prototype.setMinutes = function () {
    minutes=0;
    seconds=this.currentTime;
    while(seconds>=60){
        minutes++;
        seconds-=60;
    }
    return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var seconds=this.currentTime;
    while(seconds>=60){
        seconds-=60;
    }
    return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function (number) {
    number+="";
    while (number.length<2){
        number="0"+number;
    }
    return number+"";
 };

 Chronometer.prototype.setTime = function () {
      var minutes=this.setMinutes();
      var seconds=this.setSeconds();
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
    this.stopClick();
    this.currentTime=0;
 };

// Chronometer.prototype.splitClick = function () {

// };

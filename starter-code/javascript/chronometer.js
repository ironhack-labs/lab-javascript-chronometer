// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
 }
 

 Chronometer.prototype.startClick = function () {
    var that=this;     this.intervalId = setInterval(function(){
       that.currentTime++;
       that.setTime();
   },1000);
       return this.intervalId;
    }

Chronometer.prototype.setMinutes = function () {
        return Math.floor(this.currentTime/60);
      };

Chronometer.prototype.setSeconds = function () {
        return this.currentTime % 60;
      };

 Chronometer.prototype.twoDigitsNumber = function (num) {
    if (num > 9) {
        return num.toString();
      } else {
        return "0"+num;
      }
 };

 Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    
 };

Chronometer.prototype.setMilliseconds = function () {

 };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

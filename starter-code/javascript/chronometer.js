function Chronometer() {
    this.currentTime= 0 ,
    this.intervalId = 0,Chronometer.prototype.methodStartClick = function () {
    this.intervalId = setInterval(function (){
     this.currentTime+=1;
   }
   ,1000)
    };Chronometer.prototype.setMinutes = function()  {
    if (Chronometer.currentTime >= 60){
      return Chronometer.currentTime / 60;
    } else {
      return  0;
    }
   };Chronometer.prototype.setSeconds = function() {
    if (Chronometer.currentTime >= 60) {
      return Chronometer.currentTime = 0;
    } else {
      return Chronometer.currentTime;
    }
   };Chronometer.prototype.twoDigitsNumber = function(time) {
   if (time < 10) {
     return (“0” + time)
   } else {

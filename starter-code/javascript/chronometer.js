// Constructor

function Chronometer() {
this.currentTime=0;
this.intervalId=0;

return;
 }
 

 Chronometer.prototype.startClick = function () {
    var that=this;
    that.intervalId = setInterval (function(){
       that.currentTime++; 
       that.setTime()
    }
    , 1000);
};

 Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
     
 
    
 };

 Chronometer.prototype.setSeconds = function (minutes) {
    return this.currentTime-minutes*60;
    
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
   if(value < 10){
   return "0" + value;
   }
   return value.toString();
 };

 Chronometer.prototype.setTime = function () {
    this.twoDigitsNumber(this.setMinutes())
    this.twoDigitsNumber(this.setSeconds());
;

};

Chronometer.prototype.setMilliseconds = function () {
return (this.milliseconds);

 };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  clearInterval(this.currentTime);
 };

 Chronometer.prototype.splitClick = function () {

};

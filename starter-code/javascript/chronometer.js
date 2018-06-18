
function Chronometer() 
{
    this.currentTime=0;
    this.intervalId=0;
};

 Chronometer.prototype.startClick = function () {
   this.intervalId=setInterval(function(){
        this.currentTime++;
   },1000);
 };

 Chronometer.prototype.setMinutes = function () 
 {
    var minutes = Math.floor(this.currentTime/60);
    return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime - (this.setMinutes()*60);
    return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function () {
    var twoDigits = "" + n;
    if (twoDigits.length <= 1){
       return twoDigits = "0" + n;
    };
    return twoDigits;
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    return clearInterval(this.intervalId);  
};

 Chronometer.prototype.resetClick = function () {
    return this.currentTime = 0;

 };

// Chronometer.prototype.splitClick = function () {

// };

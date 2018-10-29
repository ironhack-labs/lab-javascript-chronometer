// Constructor
var currentTimeMin = 0;
var min = 0;

 function Chronometer() {
        this.currentTime = 0;
        this.intervalId = 0;
 }

Chronometer.prototype.startClick = function() {
    setInterval(function(){
        this.currentTime++;
        this.setTime();
    }.bind(this),1000);
}

 Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime / 60);
 };

 Chronometer.prototype.setSeconds = function () {
     if(this.currentTime === 0){
         return 0;
     }else if (this.currentTime < 0) {
        return this.currentTime;
     } else {
        return this.currentTime - this.setMinutes()*60
    };
 };

 Chronometer.prototype.twoDigitsNumber = function (oneDigitNumber) {
         
     if (oneDigitNumber < 10){
        return "0" + oneDigitNumber;
     }
     
    return oneDigitNumber.toString();
 };

 Chronometer.prototype.setTime = function () {
       
        var minutes = this.twoDigitsNumber(this.setMinutes());
        var seconds = this.twoDigitsNumber(this.setSeconds());

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.startClick());
 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };

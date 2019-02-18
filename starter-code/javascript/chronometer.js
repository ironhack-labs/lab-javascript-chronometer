// Constructor

// function Chronometer() {
    function Chronometer (){
        this.intervalId = 0
        this.currentTime = 0
    };
// }

// Chronometer.prototype.startClick = function () {

Chronometer.prototype.startClick = function (){ 
    var cont = this;
    this.intervalId = setInterval (function () {
        cont.currentTime +=1;   
    }, 1000);
    };

// Chronometer.prototype.setMinutes = function () {
Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime / 60);
    };
// };

// Chronometer.prototype.setSeconds = function () {
Chronometer.prototype.setSeconds = function () {
    if(this.currentTime === 0){
        return 0;
    }else if (this.currentTime < 0) {
        return this.currentTime;
    } else {
        return this.currentTime - this.setMinutes()*60
       };
    };
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
    Chronometer.prototype.twoDigitsNumber = function (twoDigits) {

        var twoDigitString = "" + twoDigits;
    
        if (twoDigitString.length == 1) {
            twoDigitString = "0" + twoDigitString;
        }
    
        return twoDigitString;
    };
// };

// Chronometer.prototype.setTime = function () {
    Chronometer.prototype.setTime = function () {
    
        printTime(this.twoDigitsNumber(this.setMinutes()), this.twoDigitsNumber(this.setSeconds()));
    
    };
// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
    Chronometer.prototype.stopClick = function () {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    };
// };

// Chronometer.prototype.resetClick = function () {
    Chronometer.prototype.resetClick = function () {

        this.currentTime = 0;
    };
// };

// Chronometer.prototype.splitClick = function () {

// };

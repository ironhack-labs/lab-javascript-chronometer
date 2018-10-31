
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
 }

 Chronometer.prototype.startClick = function(){

    this.intervalId = setInterval(function(){  
        this.setTime();
        this.currentTime += 1; 
    }.bind(this), 1000)
    
}


 Chronometer.prototype.setMinutes = function () {
    var minutes = this.currentTime / 60;
    return Math.floor(minutes);
 };

 Chronometer.prototype.setSeconds = function () {
     var seconds = this.currentTime % 60;
     return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
    var twoDigits;
    if(value < 10){
        twoDigits = '0' + value;
    }
    else{
        twoDigits = ''+value;
    }
    return twoDigits
 };

 Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var time = minutes + seconds;
    return time;
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

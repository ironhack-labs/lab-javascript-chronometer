// Constructor

function Chronometer (){
    this.currentTime = 0; 
    this.intervalId=0;
};



Chronometer.prototype.startClick= function(){
        var that = this;
        this.intervalId = setInterval(function(){
            that.currentTime++
        },1000);
    };

Chronometer.prototype.setMinutes = function (){
 var timeMinutes = Math.floor(this.currentTime/60);
 return timeMinutes;
}

  


// Chronometer.prototype.setSeconds = function () {
  Chronometer.prototype.setSeconds = function(){
      var timeSeconds = this.currentTime%60;
      return timeSeconds;
  };
// };

Chronometer.prototype.twoDigitsNumber = function (digits) {
    
    if (digits.toString().length<2) {
        return  "0" + digits.toString();
    }else{
        return digits.toString();
    }
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

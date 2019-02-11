function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = "" ;
    this.seconds = "" ;
}

Chronometer.prototype.startClick = function () {
    _this = this;
    this.intervalId = setInterval(function () {
        _this.currentTime += 1; 
      }, 1000);
 };

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
  };
  
Chronometer.prototype.setSeconds = function() {
    return  this.currentTime%60;
  };

Chronometer.prototype.twoDigitsNumber = function(two) {
    two = two.toString();
    if (two.length < 2) {
       return "0"+ two;
    }
    else {
        return two;
    }
};

Chronometer.prototype.setTime = function () {
        this.minutes = this.twoDigitsNumber(this.setMinutes());
        this.seconds = this.twoDigitsNumber(this.setSeconds());
        console.log(this);
      };  
      
Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
  };

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Constructor
function Chronometer() {
     this.currentTime=0;
     this.intervalId = null;
}

Chronometer.prototype.startClick = function () {
    var self=this;

   this.intervalId = setInterval (function(){
        self.currentTime++;
        self.setTime();
    }, 1000);
  
}

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime%60);
};

Chronometer.prototype.twoDigitsNumber = function (oneOrTwoDigitNumber) {
    if (oneOrTwoDigitNumber < 10) {
        return '0'+oneOrTwoDigitNumber;
    }
    else if (oneOrTwoDigitNumber===0) {
        return '00';
    }
    else {
        return oneOrTwoDigitNumber+"";
    }
};

Chronometer.prototype.setTime = function () {
    return (this.twoDigitsNumber(this.setMinutes())+":"+this.twoDigitsNumber(this.setSeconds()));
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
};

// Chronometer.prototype.splitClick = function () {

// };

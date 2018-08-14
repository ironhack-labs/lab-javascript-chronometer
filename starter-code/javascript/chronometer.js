// Constructor
function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval (function() {
        var i = 1;
        chronometer.currentTime++;
        i++;
        chronometer.setTime();
}, 1000);
};

Chronometer.prototype.setMinutes = function () {
    var minutes = 0;
    minutes = Math.floor(this.currentTime/60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {  
  var second=0;
  second = Math.floor(this.currentTime%60);
  return second;  
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    m1 = "";
    if (value < 10) {
        return "0"+value;
    }
    else {
        return m1+value;
    };
  };

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes()),
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
  printTime();
};

Chronometer.prototype.setMilliseconds = function () {
    return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function () {
 clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
    this.currentTime = 0;
    this.setTime();
};

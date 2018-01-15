function Chronometer() {
  this.timeOut = 0;
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function(startClick) {
  this.currentTime = 0;
  var that = this;
  var currentTime = setInterval(function() {
    that.currentTime ++;
    //     if (i > 10) {
    //     clearInterval(intervalId);
    //   }
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
    var minutes = this.currentTime / 60;
    return parseInt(minutes);
};

Chronometer.prototype.setSeconds = function() {
        var seconds = this.currentTime % 60;
        return parseInt(seconds);
    };

Chronometer.prototype.twoDigitsNumber = function(number) {
    var twoDigits = number + '';
    if (twoDigits.length == 1){
        return '0' + twoDigits;
    }
    return twoDigits;
};

Chronometer.prototype.setTime = function() {
    var min = this.twoDigitsNumber(this.setMinutes());
    var seg = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function() {};

Chronometer.prototype.stopClick = function() {};

Chronometer.prototype.resetClick = function() {};

Chronometer.prototype.splitClick = function() {};

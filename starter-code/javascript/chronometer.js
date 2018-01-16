// Constructor
function Chronometer() {
    this.currentTime;
    this.intervalId;
}

Chronometer.prototype.startClick = function () {
    var self = this;
    self.intervalId = setInterval(function () {
        self.currentTime++;
    }, 1000) 

};

Chronometer.prototype.setMinutes = function () {
  var self = this;
  return Math.floor(self.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  var self = this;
  return self.currentTime%60;
};

Chronometer.prototype.twoDigitsNumber = function (digits) {
  var self = this;
if (digits.length === 1) {
    return "0" + digits;
    } else {
        return digits;
    }
};

Chronometer.prototype.setTime = function () {
 var self = this;
 
var time = {};
time.minutes = self.twoDigitsNumber(self.setMinutes());
time.seconds = self.twoDigitsNumber(self.setSeconds());

return time;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
var self = this;

clearInterval(self.intervalId);
};

Chronometer.prototype.resetClick = function () {
var self = this;

};

// Chronometer.prototype.splitClick = function () {

// };

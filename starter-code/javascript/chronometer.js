// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
};


Chronometer.prototype.startClick = function () {
    var self = this;
    window.setInterval(function() {
        self.currentTime = self.currentTime + 1;
    }, 1000); 
}

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  // var minutes = Math.floor(this.currentTime / 60);
  return this.currentTime - this.setMinutes() * 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    //return (number < 10 ? '0' : '') + number
    if(number < 10) {
        return '0' + number.toString();
    } else {
        return number.toString();
    }
};

Chronometer.prototype.setTime = function () {
    var seconds = setSeconds();
    var minutes = setMinutes();
};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

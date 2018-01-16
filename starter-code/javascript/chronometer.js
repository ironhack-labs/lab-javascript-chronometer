// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.clicked = false;
}

 Chronometer.prototype.startClick = function () {
    var self = this;
    self.clicked = true;
    self.intervalId = setInterval(function() {
        self.currentTime++ ;
    }, 1000);
 };

Chronometer.prototype.setMinutes = function () {
    var self = this;
    return Math.floor(self.currentTime/60);
};

 Chronometer.prototype.setSeconds = function () {
    var self = this;
    return self.currentTime % 60;
 };

Chronometer.prototype.twoDigitsNumber = function (value) {
    var self = this;
    if (value.indexOf) {
        return "0" + self.value;
    }
 };

// Chronometer.prototype.setTime = function () {
    var self = this;
// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

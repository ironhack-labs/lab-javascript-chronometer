// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var self = this;

    self.intervalId = window.setInterval(function(){
        return self.currentTime += 1;
    }, 1000);

};

Chronometer.prototype.setMinutes = function () {
    var self = this;
    var min = Math.floor(self.currentTime / 60);
    return min;
};

Chronometer.prototype.setSeconds = function () {
    var self = this;
    return self.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function () {
    var self = this;
    var seconds = self.currentTime % 60;
    if (seconds < 10){
        return "0" + seconds;  
    }
    return seconds.toString();
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

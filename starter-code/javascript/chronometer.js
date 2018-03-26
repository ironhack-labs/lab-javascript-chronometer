// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = null;

}

Chronometer.prototype.startClick = function () {
    this.intervalId = window.setInterval(this.startClick,1000);
    this.currentTime++;

};

Chronometer.prototype.setMinutes = function () {

    return this.currentTime%60;

};

Chronometer.prototype.setSeconds = function () {

    return this.currentTime;
  
};

Chronometer.prototype.twoDigitsNumber = function (value) {

    
  
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {

    this.intervalId = window.clearInterval(this.currentTime);
  
};

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

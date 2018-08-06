// Constructor

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.seconds = 0;
    this.minutes = 0;
}

Chronometer.prototype.startClick = function() {
    this.intervalId = setInterval(
        function() {
            this.currentTime++;
            this.setTime();
        }.bind(this),
        1000
    );
};

Chronometer.prototype.setMinutes = function() {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number.toString();
    }
};

Chronometer.prototype.setTime = function() {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.setSeconds();
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
    this.currentTime === 0;
};

// Chronometer.prototype.splitClick = function () {

// };

/*  var minutes = chronometer.currentTime;
                            
    if (minutes > 0) {
        console.log(Math.floor(minutes));
    } else {
        console.log('The time hasnt started yet' + 0);
    }
    chronometer.currentTime = minutes;
    return this.currentTime;*/

// reference : chronometer.intervalId

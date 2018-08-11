// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    
}

Chronometer.prototype.startClick = function () {
    var seg = this;
    //this.currentTime = 1;
    //console.log('Hola');
    this.intervalId = setInterval(function () {
        
        seg.currentTime += 1;
        seg.setTime();

    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    var minutes = 0;
    minutes =  Math.floor(this.currentTime / 60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var segundos = 0;
    segundos = this.currentTime % 60;
    return segundos;
};

Chronometer.prototype.twoDigitsNumber = function (digit) {
    if(digit < 10) {
        digit = '0' + digit;
    }
    return digit.toString();
};

Chronometer.prototype.setTime = function () {
    var minutes = 0;
    var seconds = 0;
    minutes = this.setMinutes(this.currentTime);
    seconds = this.setSeconds(this.currentTime);
    minutes = this.twoDigitsNumber(minutes);
    seconds = this.twoDigitsNumber(seconds);
    //return minutes, seconds;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {

    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };


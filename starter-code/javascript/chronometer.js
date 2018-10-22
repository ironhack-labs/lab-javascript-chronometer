// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.loopTime;
}

Chronometer.prototype.startClick = function () {
    let self = this;
    this.intervalId = setInterval(function() {
        self.currentTime += 1;  
        self.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    let minutesTime = this.currentTime / 60;
    return Math.floor(minutesTime);
};

Chronometer.prototype.setSeconds = function () {
    let secondsTime = this.currentTime % 60;
    return secondsTime;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    let stringToDigits = num.toString();
    if (stringToDigits.length < 2) {
        let twoDigitsStrings = '0' + num; 
        return twoDigitsStrings;
    } else {
        return stringToDigits;
    }
  
};

Chronometer.prototype.setTime = function () {
    let minutes = this.setMinutes(this.currentTime);
    let seconds = this.setSeconds(this.currentTime);
    let minutesString = this.twoDigitsNumber(minutes);
    let secondsString = this.twoDigitsNumber(seconds);
    console.log(minutesString + ":" + secondsString);
    return this.loopTime = minutesString + secondsString;
    //return (minutesString + secondsString);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
  
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

let newChronometer = new Chronometer

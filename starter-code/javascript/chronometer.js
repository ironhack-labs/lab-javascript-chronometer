// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = -1 ;
this.currentMillisecond =0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval (this.timeHandler.bind(this), 1000);
    
};

Chronometer.prototype.timeHandler = function() {
    // this.currentMillisecond = 0;
    this.currentTime += 1;
    this.setTime();
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    // this.millisec = this.twoDigitsNumber(this.setMilliseconds());
    // console.log(this.intervalId);
    // console.log(this.minutes, this.seconds);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value < 10) {
      return String("0"+value);
  }
  else {return String(value)}
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
};

// Chronometer.prototype.setMilliseconds = function () {
// return this.currentMillisecond = (this.currentMillisecond + 1) * 100;
// };


// Chronometer.prototype.splitClick = function () {

// };

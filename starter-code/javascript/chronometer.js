// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime ++;
        this.setTime();
    },1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.setMilliseconds = function () {
    return Math.floor(((this.currentTime % 60) % 1) * 1000);
};

Chronometer.prototype.twoDigitsNumber = function (n) {
    if(n.toString().length < 2){
      return n = "0" + n;
  } 
  return n.toString();
};

Chronometer.prototype.setTime = function () {
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.minutes = this.twoDigitsNumber(this.setMinutes());
};


Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.milliseconds);
    console.log(this.milliseconds);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = "00";
};

// Chronometer.prototype.splitClick = function () {

// };

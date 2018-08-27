

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = 0;
  this.seconds = 0;
}

Chronometer.prototype.startClick = function () {
    var th = this;
    this.intervalId = setInterval(function(){    
      th.currentTime++;
      th.setTime()
      printSeconds();
   },1000)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime /60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if(number <10){
      return "0"+ number
    }
    return number.toString()
};

Chronometer.prototype.setTime = function () {
 this.minutes = this.twoDigitsNumber(this.setMinutes())
 this.seconds = this.twoDigitsNumber(this.setSeconds())
 console.log (this.seconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.setTime();
  printSeconds();
};

// Chronometer.prototype.splitClick = function () {

// };

// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.min = "";
  this.sec ="";
}

Chronometer.prototype.startClick = function () {
  var p = this;
  this.intervalId = setInterval(function(){
    p.currentTime++;
    p.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  var result = number < 10 ? "0" + number : String(number);
  return result;
};

Chronometer.prototype.setTime = function () {
  this.min = this.twoDigitsNumber(this.setMinutes(this.currentTime));
  this.sec = this.twoDigitsNumber(this.setSeconds(this.currentTime));
  printMinutes(this.min);
  printSeconds(this.sec);
};

//Chronometer.prototype.setMilliseconds = function () {
  
//};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

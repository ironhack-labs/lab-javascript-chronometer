// Constructor
function Chronometer() {
    this.currentTime = 0;
}




Chronometer.prototype.startClick = function () {
  var self = this;
  this.intervalID = setInterval(() => {
    this.currentTime ++;
    this.setTime();
  }, 100)
};

Chronometer.prototype.setMinutes = function () {
  let self = this;
  var min = parseInt(this.currentTime/60);  
  return min;
};

Chronometer.prototype.setSeconds = function () {
  return  this.currentTime - (this.setMinutes()*60) ;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value <= 9) {
    return ("0" + value);
  }
  return value
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  console.log(minutes +":"+  seconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalID);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

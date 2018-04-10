// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function(){
     that.currentTime++;
     that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return (this.currentTime - (this.currentTime % 60)) / 60;
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (numericStringArg) {
  var formattedNumber;

  if (numericStringArg.toString().length < 2){
    formattedNumber = "0" + numericStringArg.toString();
  } else {
    formattedNumber = numericStringArg.toString();
  }

  return formattedNumber;
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  return [minutes, seconds];
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

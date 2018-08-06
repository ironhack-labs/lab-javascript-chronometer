// Constructor


function Chronometer() {

  this.currentTime = 0;
  this.intervalId = 0;
}


var clock = new Chronometer()
// }

// Chronometer.prototype.startClick = function () {

Chronometer.prototype.startClick = function () {

  var intervalId = setInterval(function () {
    this.currentTime++;
    this.setTime();
  }.bind(this), 1000)
}

// };

Chronometer.prototype.setMinutes = function () {

  var minutes = Math.round((this.currentTime / 60));

  return minutes

};

Chronometer.prototype.setSeconds = function () {

  var seconds = Math.round(this.currentTime % 60);

  return seconds
};

Chronometer.prototype.twoDigitsNumber = function (input) {

  var output = input.toString();

  if (output.length === 1) {
    return "0" + output
  }

  return output;

};

Chronometer.prototype.setTime = function () {

  var minutesDigits = this.twoDigitsNumber(this.setMinutes());
  var secondsDigits = this.twoDigitsNumber(this.setSeconds());

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

// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  var that = this;
}

Chronometer.prototype.startClick = function() {
  var that = this;
  this.intervalId = setInterval(function() {
    that.currentTime += 1;
    that.setTime()
  }, 1000);
};
console.log(this.intervalId);

Chronometer.prototype.setMinutes = function() {
  var minutos = Math.floor(this.currentTime / 60);
  return minutos
};

Chronometer.prototype.setSeconds = function() {
  var segundos = this.currentTime % 60;
  return segundos
};

Chronometer.prototype.twoDigitsNumber = function(a) {
  if (a < 10) {
    return "0" + a;
  } else {
    return a.toString();
  }
};

Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
 clearTimeout (this.intervalId)
};

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

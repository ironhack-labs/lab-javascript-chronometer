// Constructor
function Chronometer() {
  currentTime =0,
  intervalId =0,
  formato=[0,0,0,0]
}

Chronometer.prototype.startClick = () => {
  var intervalId = setInterval(currentTime++, 1000);

};

Chronometer.prototype.setMinutes = () => {
  return Math.floor(currentTime / 60);
};

Chronometer.prototype.setSeconds = () => {
  return currentTime - Chronometer.prototype.setMinutes() * 60;
};
//var that = this;
Chronometer.prototype.twoDigitsNumber = (a, b) => {

  if (a.length === 1) {
    formato[0] = 0;
    formato[1] = a;
  } else {
    formato[0] = a[0];
    formato[1] = a[1];
  }
  if (b.length === 1) {
    formato[2] = 0;
    formato[3] = b;
  } else {
    formato[2] = b[0];
    formato[3] = b[1];
  }
};

Chronometer.prototype.setTime = () => {
  var min = this.twoDigitsNumber(this.setMinutes);
  var sec = this.twoDigitsNumber(this.setSeconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = () => {
  clearInterval(intervalId);
};

Chronometer.prototype.resetClick = function() {
  currentTime = 0;
  intervalId = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  // because of scoping, make a copy of this (otherwise we can't access this.currentTime++;)
  var self = this;
  self.intervalId = setInterval(function () {
    self.currentTime++;
    self.setTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  // return how many minutes (from seconds total). (10 * 6000 = 60.000 miliseconds which is 1 minute)
  return Math.floor(this.currentTime / 6000);
};

Chronometer.prototype.setSeconds = function () {
  // return seconds left after calculating minutes. 
  return Math.floor((this.currentTime % 6000) / 100);
};

Chronometer.prototype.setMilliseconds = function () {
  // current time 100 (10*100) = 1 second. return what's left.
  return this.currentTime % 100;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  // if one digit, add a leading 0
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
};

Chronometer.prototype.setTime = function () {
  // Taking the current time and set it in minutes and seconds (2 digits)
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var milisec = this.twoDigitsNumber(this.setMilliseconds());

  // display seconds
  secDec.innerHTML = seconds.substr(0, 1);
  secUni.innerHTML = seconds.substr(1, 1);
  // display minutes
  minDec.innerHTML = minutes.substr(0, 1);
  minUni.innerHTML = minutes.substr(1, 1);
  // display miliseconds
  milDec.innerHTML = milisec.substr(0, 1);
  milUni.innerHTML = milisec.substr(1, 1);
  // return time in format for splits
  return minutes + ":" + seconds + ":" + milisec;
};

Chronometer.prototype.stopClick = function () {
  // stop the current interval (but remember current time so it can be continued)
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  // reset the current time to 0
  this.currentTime = 0;
  // display 00:00:00 in the chronometer
  this.setTime();
};

Chronometer.prototype.splitClick = function () {
  // get current time
  timeValue = this.setTime();
  // create list element and append to splits parent
  listValue = document.createElement("li");
  listValue.innerHTML = timeValue;
  var orderedList = document.getElementById("splits");
  orderedList.appendChild(listValue);
};

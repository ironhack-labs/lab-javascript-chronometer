// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  // because of scoping, make a copy of this
  // console.log("startClick called");
  var self = this;
  self.intervalId = setInterval(function() {
    self.currentTime ++;
    self.setTime();
    // console.log(self);
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  // return how many minutes (from seconds total)
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  // return seconds left after calculating minutes
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  // if one digit, add a leading 0
  if(number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
};

Chronometer.prototype.setTime = function () {
  // Taking the current time and set it in minutes and seconds (2 digits)
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  // console.log("test" + this.currentTime);
  // display seconds
  var secOne = document.getElementById("secDec");
  secOne.innerHTML = seconds.substr(0,1);
  var secTwo = document.getElementById("secUni");
  secTwo.innerHTML = seconds.substr(1,1);
  // display minutes
  var minOne = document.getElementById("minDec");
  minOne.innerHTML = minutes.substr(0,1);
  var minTwo = document.getElementById("minUni");
  minTwo.innerHTML = minutes.substr(1,1);
  return minutes+":"+seconds;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  // stop the current interval
  // console.log("stopClick called");
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  // reset the current time to 0
  this.currentTime = 0;
  // display 00:00
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

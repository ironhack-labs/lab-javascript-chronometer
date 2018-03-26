// Constructor
function Chronometer() {
  this.currentTime = 0,
  this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
  var self = this; //Important! Create an alias here for this because once you have a function inside a function, the this will change. So if you set self = this within the constructor and prototype
  
  self.intervalId = setInterval(increment, 1000); 
  
  function increment() {
    self.currentTime += 1;
    self.setTime();
  }
}; 

Chronometer.prototype.setMinutes = function () {
  var minutes = this.currentTime / 60;
  return Math.floor(minutes);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if (time >= 0 && time < 10) {
    time = "0" + time;
    return time;
  } else {
    return time + "";
  }
};


Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes);
  var seconds = this.twoDigitsNumber(this.setSeconds);
  var setTime = minutes + ": " + seconds;
  return setTime;
};

//Chronometer.prototype.setMilliseconds = function () {

//};

Chronometer.prototype.stopClick = function () {
  clearInterval (this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };

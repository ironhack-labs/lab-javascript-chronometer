
// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  chronometer.intervalId = setInterval(function(){
  return chronometer.currentTime+=1;
  }, 1000);
  console.log(chronometer.currentTime);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(chronometer.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return chronometer.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  value = value < 10 ? '0' + value : value;
  return value;
};

Chronometer.prototype.setTime = function () {
var minutes = chronometer.setMinutes(); //30
var seconds = chronometer.setSeconds();//10

this.twoDigitsNumber(minutes);
this.twoDigitsNumber(seconds);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(chronometer.intervalId);
};

Chronometer.prototype.resetClick = function () {
  chronometer.currentTime = 0;
};

//Chronometer.prototype.splitClick = function () {
  
//};

// Chronometer.prototype.setMilliseconds = function () {

// };

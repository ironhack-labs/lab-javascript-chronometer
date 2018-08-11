// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}


Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
    // console.log(this.currentTime);
    return this.currentTime;
  }, 1000);
};



Chronometer.prototype.setMinutes = function () {
  this.startClick();
  var minutes = Math.floor(this.currentTime / 60);
  // console.log(this.currentTime);
  return minutes;
};

var curent = new Chronometer();
console.log(curent.setMinutes());

Chronometer.prototype.setSeconds = function () {
  console.log(this.currentTime);
  return this.currentTime % 60;
};
// console.log(curent.setSeconds());

Chronometer.prototype.twoDigitsNumber = function (value) {
  if(value < 10 || value == 0){
    return "0"+value;
  }
  return value.toString();
  
};
console.log(curent.twoDigitsNumber(15));


Chronometer.prototype.setTime = function () {

  var minutes = this.currentTime/60;
  var seconds = this.currentTime;

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
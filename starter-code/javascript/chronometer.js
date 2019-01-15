// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

var minutes;
var seconds;


// console.log("first line");

// setTimeout(function(){
//   console.log("second line");
// }, 200)

// console.log("third line");


// var i = 0;

// setTimeout(function() {
//   clearInterval(watchTime);
//   console.log("stop the timer");
// },10000);

// var watchTime = setInterval(function(){
//    i++;
//    console.log(`${i} seconds`);

// }, 1000);

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval((function() {
  this.currentTime++;
  this.setTime();
  }).bind(this),1000);
  return;
};

Chronometer.prototype.setMinutes = function () {
  return (this.currentTime - this.currentTime % 60) / 60 ;
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;  
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if(time < 10) {
    return "0" + time;
  } else {
    return time.toString();
  }
};

Chronometer.prototype.setTime = function () {
  minutes = this.twoDigitsNumber(this.setMinutes());
  seconds = this.twoDigitsNumber( this.setSeconds());
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

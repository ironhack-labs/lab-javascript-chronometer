 //Constructor
 function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
   this.minutes = "00";
   this.seconds = "00";
   this.milisec = "00";
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    this.currentTime++;
    this.setTime();
  }.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime - (this.setMinutes() * 60);
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if (time.toString().length == 1) {
    return "0" + time;
  } else {
    return time.toString();
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};
// Not finished
// Chronometer.prototype.setMilliseconds = function () {
// var thisInterval = 0;
// var miliInterval = setInterval(function() {
//    thisInterval++;
//    if (thisInterval.length == 1) {
//     this.milisec = "00" + thisInterval;
//   } else if (thisInterval.length == 2)  {
//     this.milisec = "0" + thisInterval;
//   } else if (thisInterval.length == 3)  {
//     this.milisec = thisInterval.toString();
//   } else if (thisInterval.length == 4) {
//     thisInterval = 0;

//   }
//  }, 1)
// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
 this.currentTime = 0;
 this.setTime();
};

// Chronometer.prototype.splitClick = function () {

// };

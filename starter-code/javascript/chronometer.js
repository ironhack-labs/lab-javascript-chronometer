// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = -1;
}

Chronometer.prototype.timerHandler = function() {
  this.currentTime += 1;
  console.log("incrementing currentTime... this val: "
  + this.currentTime);
 this.setTime();
}

// Constructor 2
//function Chronometer() {
  //Chronometer.length = 0;
  //var currentTime = 
//}

//Chronometer.prototype.startCount() {
//  var thisChrono = this;
//  showInrerval = setInterval(function) {
//    thisChrono.Milliseconds++;
//    if 
//  }
//}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(this.timerHandler.bind(this),1000);
};


Chronometer.prototype.setMinutes = function (currentTime) {
  this.min = Math.floor(this.currentTime / 60);
  return this.min;
};

Chronometer.prototype.setSeconds = function (CurrentTime) {
  this.sec = Math.floor(this.currentTime % 60);
  return this.sec;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number < 10) {
    return "0"+number;
  } else {
    return ""+number;
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
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

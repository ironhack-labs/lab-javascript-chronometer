// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;
  this.minutes;
  this.seconds;
  this.milliSeconds;
}

Chronometer.prototype.startClick = function () {    
  var that = this;

  this.intervalId = setInterval(function () {   // Every 10 milisec counter increment by 1
    that.currentTime += 1;
    console.log(that.currentTime)
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return this.minutes = Math.floor(Math.floor(this.currentTime / 100) / 60);  //calculated minutes from milisec
};

Chronometer.prototype.setSeconds = function () {
  return this.seconds = Math.floor(this.currentTime / 100) - Math.floor(Math.floor(this.currentTime / 100) / 60) * 60;  // calculated seconds from milisec
   
};


Chronometer.prototype.setMilliSeconds = function () {
  return this.milliSeconds = this.currentTime;   // returns value of milisec
};


Chronometer.prototype.twoDigitsNumber = function (number) { // convert number to string 
  if (number < 10) {
    return "0" + number.toString();  // add 0 before single digit format to display it in  double digit format
  }
  else {
    return number.toString();
  }
};


Chronometer.prototype.stopClick = function () { 
  clearInterval(this.intervalId);           //stopped setInterval function
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// ------------------------------------------------------------

// Chronometer.prototype.setTime = function () {

// };

// // Chronometer.prototype.setMilliseconds = function () {

// // };

//  Chronometer.prototype.splitClick = function () {

//  };

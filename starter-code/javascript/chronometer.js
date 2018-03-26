// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 1000;

}

Chronometer.prototype.startClick = function (currentTime, intervalId) {
  var that = this;

  var time = this.currentTime;

  var intervalID = setInterval(function() {
     that.currentTime++;
     that.setTime();
  },1000)


};

Chronometer.prototype.setMinutes = function (currentTime) {
  if(currentTime!=NaN){
  
  var minutes = this.currentTime/60;
  
  return Math.floor(minutes);
  } 
  
};

Chronometer.prototype.setSeconds = function () {

  var seconds = (this.currentTime%60);

  return Math.floor(seconds);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if (number <10){
    return "0"+number;
  } else {
    return String(number);
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.setMinutes;
  var seconds = this.setSeconds;

  return String(minutes+":"+seconds);
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

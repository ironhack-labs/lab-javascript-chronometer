// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;
}

Chronometer.prototype.startClick = function (currentTime, intervalId) {
  var that = this;

  var time = this.currentTime;

  this.intervalId = setInterval(function() {
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
  
  if (this.setMinutes() < 10){
    var minutes = '0' + this.setMinutes();
  } else
  {
    var minutes = this.setMinutes();
  }

  if (this.setSeconds() < 10){
    var seconds = '0' + this.setSeconds();
  } else
  {
    var seconds = this.setSeconds();
  }

  return (minutes + ":" + seconds);
};

Chronometer.prototype.setMilliseconds = function () {
 
 };

Chronometer.prototype.stopClick = function () {

  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// };

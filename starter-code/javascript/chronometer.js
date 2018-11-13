// Constructor
 function Chronometer() {

    this.currentTime = new Date();
    //we initialize minutes, secons an millis. to 0.
    this.currentTime.setMinutes(0);
    this.currentTime.setSeconds(0);
    this.currentTime.setMilliseconds(0);

    this.intervalId = 0;
    this.minutes = "00";
    this.seconds = "00";
    this.milliseconds = "00";
    this.splits = []; //array for the splits time
 }

 Chronometer.prototype.startClick = function () {
    
    this.intervalId = setInterval(function() {
        this.currentTime.setMilliseconds(this.currentTime.getMilliseconds() + 10);
        this.setTime();
        
    }.bind(this), 10); ////we refresh every 10 milliseconds
 };

Chronometer.prototype.setMinutes = function () {
  
  return this.currentTime.getMinutes();
};

Chronometer.prototype.setSeconds = function () {
  
  return this.currentTime.getSeconds();
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  
  if ((value + "").length === 1) {
      return ("0" + value);
  } else {
      return (value + "").slice(0,2); // ".slice(0,2) to get only two digits ("for the millisec.)
  }
};

Chronometer.prototype.setTime = function () {
  
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime.getMilliseconds();
};

Chronometer.prototype.stopClick = function () {
  
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  
  this.currentTime.setMinutes(0)
  this.currentTime.setSeconds(0);
  this.currentTime.setMilliseconds(0);
  this.minutes = "00";
  this.seconds = "00";
  this.milliseconds = "00";
  this.splits = [];
};

Chronometer.prototype.splitClick = function () {

  this.splits.push(this.minutes + ":" + this.seconds + ":" + this.milliseconds);
};
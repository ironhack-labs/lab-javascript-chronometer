function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;

  this.minutes = 0;
  this.seconds = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function () {
    //console.log(this.currentTime);
    that.currentTime++;
    that.setTime();
  }, 1000);
};


Chronometer.prototype.setMinutes = function () {
  var that=this
  return Math.floor(that.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
  var that=this
  return that.currentTime % 60
};

Chronometer.prototype.setMilliseconds = function () {
  var that = this
  return that.currentTime % 100;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if(value < 10){
    return ("0" + value);
  } else {
    return value.toString();
  }
};

 Chronometer.prototype.setTime = function () {
   this.minutes = this.twoDigitsNumber(this.setMinutes());
   this.seconds = this.twoDigitsNumber(this.setSeconds());
   this.milliSeconds = this.twoDigitsNumber(this.setMilliseconds());
 };

  Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
  };

  Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
 };

 Chronometer.prototype.splitClick = function () {
  return this.minutes +":"+this.seconds+":"+ this.milliSeconds;
};

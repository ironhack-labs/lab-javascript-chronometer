// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function(){
      that.currentTime += 1;
      that.setTime();
    }, 10);
 };

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 6000);
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime / 100);
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime % 100;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if(number < 10 && number > -1){
    return '0' +number;
  }else{
    return ''+ number;
  }
    
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.stopClick();
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
  return this.minutes +":"+this.seconds+":"+ this.milliseconds;
};

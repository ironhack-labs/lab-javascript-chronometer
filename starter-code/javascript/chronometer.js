// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this. intervalId = 0;
}
Chronometer.prototype.startClick = function(){
  //var thos = this;
  this.intervalId = setInterval(() => {
    return this.currentTime++;
  },1000);
}

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60)  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  if(num<10) {
    num = "0" + num;
  return num
  } 
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0
};

Chronometer.prototype.splitClick = function () {

};

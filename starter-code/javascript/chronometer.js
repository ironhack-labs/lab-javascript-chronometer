//Constructor



function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.seconds;
  this.minutes;
}

Chronometer.prototype.startClick = function () {
  var cronometro = this;
  this.intervalId = setInterval(function(){
    console.log(cronometro.minutes);
    console.log(cronometro.seconds);
    cronometro.currentTime++;
    cronometro.setTime();
  },1000)
};

Chronometer.prototype.setSeconds = function () {
  
    return Math.floor(this.currentTime%60);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
  
};



Chronometer.prototype.twoDigitsNumber = function (num) {
  if (num < 10){
    return '0' + num;
  }else{
    return '' + num
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};


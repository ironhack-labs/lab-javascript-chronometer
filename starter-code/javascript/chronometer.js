// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;

 }

Chronometer.prototype.startClick = function () {
  var that=this;  
  this.intervalId = setInterval(function(){
    that.currentTime++;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  if(this.currentTime>=60){
    return parseInt(this.currentTime%60);
  }else{
    return this.currentTime;
  }
};

Chronometer.prototype.twoDigitsNumber = function (valor) {
  if (valor < 10){
    return ("0"+parseInt(valor)).toString();
  }else{
    return (parseInt(valor)).toString();
  }


};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber (this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());

  printTime(minutes,seconds)
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

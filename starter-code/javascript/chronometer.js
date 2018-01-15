// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  function sumar1(){
    that.currentTime++;
    that.setTime();
  }
  this.intervalId = setInterval(sumar1, 1000) 
};

var chronometer1 = new Chronometer();
//chronometer1.startClick();
//console.log("intervalId"+ chronometer1.intervalId);


Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return parseInt(this.currentTime %60);
  
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  if(n < 10){
    return "0" + n;
  }else{
    return n.toString();
  } 
};

Chronometer.prototype.setTime = function () {
  var seconds = this.setSeconds();
  var minutes = this.setMinutes();
  seconds = this.twoDigitsNumber(seconds);
  minutes = this.twoDigitsNumber(minutes);
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

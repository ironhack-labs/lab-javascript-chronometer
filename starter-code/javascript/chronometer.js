// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
  this.minutes = "00";
  this.seconds = "00";
}

Chronometer.prototype.startClick = function () {
  this.intervalId =

  setInterval(()=>{
    this.currentTime += 1;
    this.setTime();
  }, 1000);
}

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60;
};

// Chronometer.prototype.twoDigitsNumber = function (value) {
//   var strValue = value.toString();
//   if (strValue.length <= 1){
//     strValue = "0" + strValue;
//   }
//   return strValue;
// };

Chronometer.prototype.twoDigitsNumber = function (value) {
  return (value < 10) ? "0"+value : value.toString();
};


Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  chronometer.setTime();
};

Chronometer.prototype.splitClick = function () {

};

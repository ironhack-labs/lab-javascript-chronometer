//Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that = this;
   
   that.intervalId = setInterval(function(){
    that.currentTime++;
    that.setTime();
    }, 1000);

};

Chronometer.prototype.setMinutes = function () {
  var currentMinutes = Math.floor(this.currentTime / 60);
  return currentMinutes;
};

Chronometer.prototype.setSeconds = function () {
  var remainingSeconds = this.currentTime % 60;
  return remainingSeconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if(value < 10){
      return "0" + value;
  }
  else if(value >=10) {
      return "" + value;
  }
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(that.setMinutes());
    var seconds = this.twoDigitsNumber(that.setSeconds());
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

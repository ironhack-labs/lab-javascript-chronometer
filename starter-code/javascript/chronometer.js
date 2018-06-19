// Constructor
function Chronometer() {
    this.running = false;
    this.currentTime = 0;
    this.intervalId = "";
  };
  Chronometer.prototype.startClick = function () {
    var p = this;
    p.intervalId = setInterval(function(){
        p.currentTime++;
        p.setTime();
  }, 1000);
  };
   
  Chronometer.prototype.setMinutes = function () {
    var p = this;
    return Math.floor(p.currentTime / 60);
  }
  Chronometer.prototype.setSeconds = function () {
    var p = this;
    return p.currentTime % 60;
  };
  Chronometer.prototype.twoDigitsNumber = function digit(num) {
    var stringOne = String(num);
    while(stringOne.length < 2){
        stringOne = '0' + stringOne;
    };
    return stringOne;
  };
  Chronometer.prototype.setTime = function () {
    var p = this;
    var getSeconds = p.setSeconds;
    var seconds = p.twoDigitsNumber(getSeconds);
    var getMinutes = p.setMinutes;
    var minutes = p.twoDigitsNumber(getMinutes);
    return getMinutes + ':' + getSeconds;
  };
  Chronometer.prototype.setMilliseconds = function () {
  };
  Chronometer.prototype.stopClick = function () {
    var p = this;
    clearInterval(p.intervalId);
  };
  Chronometer.prototype.resetClick = function () {
  currentTime=0;
  };
  Chronometer.prototype.splitClick = function () {
  };
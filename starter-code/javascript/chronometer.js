// Constructor

function Chronometer() {
    this.currentTime=0;
    this.intervalId="";
 }

 Chronometer.prototype.startClick = function () {
    var that=this;
    this.intervalId=setInterval(function(){
        that.currentTime++;
        that.setTime();
    }, 1000);
 };

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
   return this.currentTime%60;
};

Chronometer.prototype.twoDigitsNumber = function (x) {
    return x.toString().padStart(2, "0"); 
 };

Chronometer.prototype.setTime = function () {
    var minutes=this.twoDigitsNumber(this.setMinutes());
    var seconds=this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
};


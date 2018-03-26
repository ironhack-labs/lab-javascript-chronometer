// Constructor


function Chronometer() {
    this.currentTime = 0,
    this.intervalId = 0
}

Chronometer.prototype.startClick = function (setTime) {
    
        var that = this
        setInterval (function(){
           var time = that.currentTime ++;
            that.setTime();
        },1000)

    };

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime/60);
 };

Chronometer.prototype.setSeconds = function () {
  return Math.round(this.currentTime - 60 * this.setMinutes())
 };

Chronometer.prototype.twoDigitsNumber = function (zegar) {
  if (zegar < 10){
      return 0 + zegar.toString()
  }else{
      return zegar.toString()
  }
};

 Chronometer.prototype.setTime = function () {
     var minuta = this.twoDigitsNumber(this.setMinutes); 
     var secunda = this.twoDigitsNumber(this.setSeconds);


 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.startClick);
 };

 Chronometer.prototype.resetClick = function () {
    this.currentTime = parseInt(this.currentTime);
    this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };



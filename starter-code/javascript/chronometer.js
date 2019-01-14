// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId  = 0;
    this.minutes     = 0;
    this.seconds     = 0;
}

Chronometer.prototype.startClick = function () {
    let self = this;
    this.intervalId = setInterval(function() {
        self.currentTime += 1;
        self.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    let min = Math.floor(this.currentTime/60);
    return min;
};

Chronometer.prototype.setSeconds = function () {
     let sec = this.currentTime%60;
    return sec;  
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  if (num<=9){
      return "0"+num;
  }
  else {
      return num.toFixed();
  }
};

Chronometer.prototype.setTime = function () {
    this.minutes =  this.twoDigitsNumber(this.setMinutes());
    this.seconds =  this.twoDigitsNumber(this.setSeconds());
};

//  Chronometer.prototype.setMilliseconds = function () {

//  };

 Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId);
 };

Chronometer.prototype.resetClick = function () {
    clearInterval(this.currentTime);
};

// Chronometer.prototype.splitClick = function () {

// };

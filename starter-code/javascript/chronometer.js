//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    var that=this;
    this.intervalId=setInterval(function()
    {
        that.setTime()
        
        return that.currentTime++
    },1000)
    
};

Chronometer.prototype.setMinutes = function () {
  return Math.trunc(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if(number<10) return `0${number}`;
    return `${number}`
};

Chronometer.prototype.setTime = function () {
    var minutes=this.twoDigitsNumber(this.setMinutes())
    var seconds=this.twoDigitsNumber(this.setSeconds())
    return [seconds, minutes];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0
};

// Chronometer.prototype.splitClick = function () {

// };

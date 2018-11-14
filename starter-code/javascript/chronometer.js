// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = 0;

}


Chronometer.prototype.startClick = function () {
    this.currentTime = 0;
    this.intervalId = setInterval(function () {
        this.currentTime ++;
        if (this.currentTime > 100) {
            clearInterval(this.intervalId);
        }
    }.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
   return Number((Math.floor(this.currentTime / 60))); 
};

Chronometer.prototype.setSeconds = function () {
    this.currentTime =this.currentTime -(this.setMinutes()*60);
    return this.currentTime;
};

Chronometer.prototype.twoDigitsNumber = function (val) { 
    return (val<10?"0"+val:val.toString());
};

Chronometer.prototype.setTime = function () { 
  let  min = this.twoDigitsNumber(this.setMinutes());
  let  sec = this.twoDigitsNumber(this.setSeconds());
  let  mili = this.twoDigitsNumber(this.setMilliseconds());
  return min + ":" + sec + "." + mili;
};

Chronometer.prototype.setMilliseconds = function () { 
    return Math.floor(this.currentTime/10)*1;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

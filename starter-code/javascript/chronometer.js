// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 1;
}

Chronometer.prototype.startClick = function () {
//call set time.
    // if(this.currentTime === 0){
        
    // }

    this.intervalId = setInterval(() => {
        var that = this;
        // console.log(this.currentTime);
        this.currentTime++;
        that.setTime();
        // return this.currentTime;
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
   return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    return (value < 10 ? "0" + value : "" + value);
};

Chronometer.prototype.setTime = function (value) {
    this.Minutes = this.twoDigitsNumber(this.setMinutes());
    this.Seconds = this.twoDigitsNumber(this.setSeconds());
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

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = '';
    this.currentMilliseconds = 0;

}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function (){
        that.currentTime += 1;
        that.setTime();
    }, 1000);

    this.millisecondsIntervalId = setInterval(function (){
        if (that.currentMilliseconds === 99) {
            that.currentMilliseconds = 0;
        }
        that.setMilliseconds ();
        that.currentMilliseconds +=1;

    }, 10);

};

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime / 60);
  
};

Chronometer.prototype.setSeconds = function (minutes) {
    return Math.floor(this.currentTime - (minutes * 60))
  
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    return ('0' + value).slice(-2);
  
};

Chronometer.prototype.setTime = function () {
   var minutes = this.twoDigitsNumber(this.setMinutes());
   var seconds = this.twoDigitsNumber(this.setSeconds(minutes));

};

Chronometer.prototype.setMilliseconds = function () {
    var milliseconds = this.twoDigitsNumber(this.currentMilliseconds);
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.setMillisecondsIntervalId);
  
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.setTime();
    this.setMilliseconds();

};

Chronometer.prototype.splitClick = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
    var milliseconds = this.twoDigitsNumber(this.currentMilliseconds);
    printSplit(minutes, seconds, milliseconds);

};

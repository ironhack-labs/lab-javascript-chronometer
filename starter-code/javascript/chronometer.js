// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = '';
};

Chronometer.prototype.startClick = function () {
        //this is the scope of the constructor, "this"
    var that=this;
    var intervalId = setInterval (function () {

        // this is not scope of the constructor because it's a inner function
        // here "this" reffers only to inside scope 
    
    that.currentTime++;
    that.setTime()
    console.log(that.currentTime);
    return this.currentTime;
 
    }, 1000)
};
    
Chronometer.prototype.setMinutes = function () {
    return Math.floor (this.currentTime/60);
};

Chronometer.prototype.setSeconds = function (minutes) {
    return Math.floor( this.currentTime - (minutes*60));
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    return ("0"+ value).slice(-2);
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  printTime(minutes, seconds);  
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    var that = this;
    clearInterval(that.intervalId);
};

Chronometer.prototype.resetClick = function () {
    var that = this;
    clearInterval(that.currentTime);
};

Chronometer.prototype.splitClick = function () {

};

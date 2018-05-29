// Constructor
function Chronometer() {
this.currentTime = 0;
this.intervalId = null;

}

Chronometer.prototype.startClick = function () {
    var that = this; // Here that refers to this and this can be seen as a pointer/reference
        //that.intervalId = (this.intervalId===null) ? null : this.resetClick();
        that.intervalId = setInterval(function(){
        that.currentTime++ ;
        that.setTime();
        }, 1000)
        this.resetClick();
};

 Chronometer.prototype.setMinutes = function () {
    var that = this;
        return Math.floor((that.currentTime/60));
 };

 Chronometer.prototype.setSeconds = function () {
    var that = this;
    return that.currentTime % 60;
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
    return (value < 10) ? "0" + value : value.toString()
 };

 Chronometer.prototype.setTime = function () {
        var minutes = "00";
        var seconds = "00";
        minutes = this.setMinutes();
        seconds = this.setSeconds();

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
     var that = this;
    clearInterval(that.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
    return this.intervalId = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };

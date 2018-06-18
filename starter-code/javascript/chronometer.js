// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
}
Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId=setInterval(function(){
        that.currentTime+=1;
        that.setTime();
    },1000)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function (minutes) {
    return this.currentTime - minutes * 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number>=10){
        return number + '';
    }
    return '0' + number;
};

Chronometer.prototype.setTime = function () {
    var minutes=this.twoDigitsNumber(this.setMinutes());
    var seconds=this.twoDigitsNumber(this.setSeconds(minutes));
    printMinutes(minutes);
    printSeconds(seconds);
    return [minutes,seconds];
};

//Chronometer.prototype.setMilliseconds = function () {

//};

Chronometer.prototype.stopClick = function () {
    return clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
};

Chronometer.prototype.splitClick = function () {
    return this.setTime();
};

// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
    this.miliId=0;
    this.currentMili=0;
}
Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId=setInterval(function(){
        that.currentTime+=1;
        that.setTime();
    },1000)
    this.miliId=setInterval(function(){
        that.currentMili+=1;
        that.setTime();
    },10)
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
    var miliseconds=this.twoDigitsNumber(this.setMilliseconds(seconds));
    printMinutes(minutes);
    printSeconds(seconds);
    printMilliseconds(miliseconds);
    return [minutes,seconds,miliseconds];
};

Chronometer.prototype.setMilliseconds = function (seconds) {
    return this.currentMili-seconds*100;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.miliId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
    this.currentMili=0;
};

Chronometer.prototype.splitClick = function () {
    return this.setTime();
};

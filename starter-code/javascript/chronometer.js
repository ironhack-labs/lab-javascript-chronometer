// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
    this.intervalIdMs = 0;
 }

 Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval(function (){
        that.currentTime++;
        that.setTime();
    }, 1000);

    this.intervalIdMs = setInterval(function (){
        that.milliseconds++;
    }, 10)
 };

 Chronometer.prototype.setMinutes = function () {
    minutes=0;
    seconds=this.currentTime;
    while(seconds>=60){
        minutes++;
        seconds-=60;
    }
    return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var seconds=this.currentTime;
    while(seconds>=60){
        seconds-=60;
    }
    return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function (number) {
    number+="";
    while (number.length<2){
        number="0"+number;
    }
    return number+"";
 };

 Chronometer.prototype.setTime = function () {
      this.minutes=this.setMinutes();
      this.seconds=this.setSeconds();
      this.milliseconds=this.setMilliseconds();
 };

 Chronometer.prototype.setMilliseconds = function () {
    if (this.milliseconds === 100){
        this.milliseconds=0;
    }
    return this.milliseconds;
 };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMs);
 };

 Chronometer.prototype.resetClick = function () {
    this.stopClick();
    this.currentTime=0;
 };

 Chronometer.prototype.splitClick = function () {
    this.resetClick();
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
 };
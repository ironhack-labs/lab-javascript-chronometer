// Constructor
function Chronometer() {
    this.currentTime =0;
    this.intervalId=0;
 }

 Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval (function(){
        that.setTime();  // 
        that.currentTime++;},1000);
 };

 Chronometer.prototype.setMinutes = function () {
     var minutos = this.currentTime;
     if (this.currentTime===0){
         return this.currentTime;
     }else{
         return Math.floor(this.currentTime/60);
     }
 };

 Chronometer.prototype.setSeconds = function () {
    return this.currentTime%60;
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
    var digit1= Math.floor(value/10);
    var digit2 = value%10;
    return digit1.toString()+digit2.toString();
 };

Chronometer.prototype.setTime = function () {
var minutos = this.twoDigitsNumber(this.setMinutes());
var segundos = this.twoDigitsNumber(this.setSeconds());

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

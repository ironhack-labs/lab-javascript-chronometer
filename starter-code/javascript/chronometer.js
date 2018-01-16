function Chronometer(){
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
}
Chronometer.prototype.startClick = function () {
    var myObject = this;
    
    this.intervalId = setInterval(function () {
      return myObject.currentTime++;
    },1000);
}
var miCrono = new Chronometer(); 
miCrono.startClick();
Chronometer.prototype.setMinutes = function () {
    this.minutes =  Math.floor((this.currentTime) / 60);
    return this.minutes;
};
Chronometer.prototype.setSeconds = function () {
    this.seconds = this.currentTime%60;
    return this.seconds;
};
Chronometer.prototype.twoDigitsNumber = function (n) {
   if (n < 10){
    return "0" + n;
   }else{
    return n.toString();
   }
};
Chronometer.prototype.setTime = function () {
};
// Chronometer.prototype.setMilliseconds = function () {
// };
// Chronometer.prototype.stopClick = function () {
  
// };
// Chronometer.prototype.resetClick = function () {
// };
// Chronometer.prototype.splitClick = function () {
// };

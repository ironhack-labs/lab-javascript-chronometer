 //Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
 }

 Chronometer.prototype.startClick = function () {
    intervalId = setInterval (function (){
    Chronometer.currentTime ++;
    },1000);
 };

 Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor (chronometer.currentTime/60)
    return minutes;
 };

 Chronometer.prototype.setSeconds = function () {
    var seconds = chronometer.currentTime - (minutes*60)
    return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function () {
  
 };

 Chronometer.prototype.setTime = function () {

 };

 Chronometer.prototype.setMilliseconds = function () {

 };

 Chronometer.prototype.stopClick = function () {
  
 };

 Chronometer.prototype.resetClick = function () {

 };

 Chronometer.prototype.splitClick = function () {

 };

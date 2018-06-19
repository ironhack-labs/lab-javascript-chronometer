// Constructor
 function Chronometer() {

        this.currentTime=0;
        this.intervalId="";

 }

 Chronometer.prototype.startClick = function () {
var that=this;
    that.intervalId=setInterval(function(){

            that.currentTime+=1;

            that.setTime();
           
        },10);
      

 };

 Chronometer.prototype.setMinutes = function () {
  
    return Math.trunc((this.currentTime/6000));

 };

 Chronometer.prototype.setSeconds = function () {
  
    return Math.trunc((this.currentTime/100)%60);

 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
  

    if (value<10)
    return "0"+value.toString();

    else return value.toString();

 };

 Chronometer.prototype.setTime = function () {

    var min=this.setMinutes();
    var sec= this.setSeconds();
    var mil=this.setMilliseconds();
    minTwo=this.twoDigitsNumber(min);
    secTwo=this.twoDigitsNumber(sec);
    milTwo=this.twoDigitsNumber(mil);
    var time=[minTwo,secTwo,milTwo];
    return time;


 };

 Chronometer.prototype.setMilliseconds = function () {

    return this.currentTime%100;


 };

 Chronometer.prototype.stopClick = function () {
  
    clearInterval(this.intervalId);

 };

 Chronometer.prototype.resetClick = function () {

        this.currentTime=0;

 };

 Chronometer.prototype.splitClick = function () {

 };

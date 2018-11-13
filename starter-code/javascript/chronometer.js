// Constructor
 function Chronometer() {
   this.currentTime=0;
   this.intervalId=0;
   this.intervalId2=0;
   this.minutes="00";
   this.seconds="00";
   this.milis="00";
   this.currentTimeMilis=0;
 }

 Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval(function(){
    this.currentTime++;
    this.setTime();
   }.bind(this),1000);

   this.intervalId2 = setInterval(function(){
     this.currentTimeMilis++;
     this.setMilliseconds();
   }.bind(this),10);
 };

 Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60);
 };

 Chronometer.prototype.setSeconds = function () {
   return this.currentTime%60;
 };

 Chronometer.prototype.setMilis = function () {
   return this.currentTimeMilis%100;
 };

 Chronometer.prototype.twoDigitsNumber = function (digito) {
   if(digito.toString().length===1)
    return "0" + digito.toString();
   else
    return digito.toString();
 };

 Chronometer.prototype.setTime = function () {
   this.minutes=this.twoDigitsNumber(this.setMinutes());
   this.seconds=this.twoDigitsNumber(this.setSeconds());
   printTime();
 };

 Chronometer.prototype.setMilliseconds = function () {
   this.milis=this.twoDigitsNumber(this.setMilis());
   printTimeMillis();
 };

 Chronometer.prototype.stopClick = function () {
   clearInterval(this.intervalId);
   clearInterval(this.intervalId2);
 };

 Chronometer.prototype.resetClick = function () {
   this.currentTime = 0;
   this.minutes = "00";
   this.seconds = "00";
   this.intervalId = 0;
   this.currentTimeMilis=0;
   this.milis="00";
   this.intervalId2=0;
 };

 Chronometer.prototype.splitClick = function () {
   setSplitBtn();
 };

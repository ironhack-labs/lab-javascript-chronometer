// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId;
  this.minutes = 1;
  this.seconds = 58;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(()=>{
  this.setTime()
   this.currentTime++;
   if(this.seconds === 60){
     this.seconds = 0;
     this.minutes++;
     console.log(minutes);
   }else{
    return this.currentTime
   }
  },1000)
  
 };

 Chronometer.prototype.setMinutes = function () {
   return Math.floor(this.currentTime/60);
 };

 Chronometer.prototype.setSeconds = function () {
   return (this.currentTime/60 - (Math.floor(this.currentTime/60)*60));
 };

 Chronometer.prototype.twoDigitsNumber = function () {
   if(this.currentTime < 10){
     return (`0${this.currentTime}`)
   }else{
     return this.currentTime ;
   }
 };

 Chronometer.prototype.setTime = function () {
    this.minutes= this.twoDigitsNumber(this.setMinutes());
    this.seconds= this.twoDigitsNumber(this.setSeconds());
 };

 //Chronometer.prototype.setMilliseconds = function () {

// };

  Chronometer.prototype.stopClick = function () {
   return clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  return currentTime = 0;
 };

 Chronometer.prototype.splitClick = function () {
   var print = document.createElement('li')
   var node 
 };

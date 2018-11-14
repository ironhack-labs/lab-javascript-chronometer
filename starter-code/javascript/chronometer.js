 
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 'intervalId';
 }

 Chronometer.prototype.startClick = function(){
     this.intervalId = setInterval(function(){
        this.currentTime++;
        this.setTime();
    }.bind(this), 1000);
     
 };

 /*Chronometer.prototype.startClick = function(){
    this.intervalId = setInterval(function()=>{
       this.currentTime++;
   }, 1000);
    el => hace el call universal
};*/ 

 Chronometer.prototype.setMinutes = function () {
   
   var minutes = Math.floor(this.currentTime/60);
   return minutes;
   console.log(this.currentTime);
 };

 Chronometer.prototype.setSeconds = function () {
  
  var seconds = Math.floor(this.currentTime%60);
  return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function (numbers) {
    
    if(numbers<10){
       return '0' + numbers.toString();
   }else{
       return numbers.toString();
   }
 

 };

 Chronometer.prototype.setTime = function () {
    
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function (clearInterval) {
    this.intervalId = clearInterval;
 };


 Chronometer.prototype.resetClick = function () {

 };

// Chronometer.prototype.splitClick = function () {

// };

// Constructor

class Chronometer{
   constructor(){
      this.currentTime = 0;
      this.intervalId = setInterval;
   }
   startClick(){
      this.intervalId = setInterval;

      let addTime = () => {
         this.setTime();
         this.currentTime++;
      };
      
      this.intervalId = setInterval(addTime, 1000)

     
   }
   setMinutes(){
      return Math.floor(this.currentTime / 60);
   }
   setSeconds(){
      return Math.floor(this.currentTime % 60);
   }
   twoDigitsNumber(number){
      if(number < 10){
         return "0" + number;
      } 
      return number.toString();
   }

   setTime () {
      let seconds = this.twoDigitsNumber(this.setSeconds());
      let minutes = this.twoDigitsNumber(this.setMinutes());
   }
   
   stopClick (){
     clearInterval(this.intervalId);
   }
   resetClick(){
      this.currentTime = 0;
   }
}

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

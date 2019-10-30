/*jshint esversion: 6 */

class Chronometer {
  constructor() {
    this.currentTime = 0;
    //this.currentTimeMil = 0;

  }
   startClick(printTime) {
     this.intervalId = setInterval(() =>{
       printTime();
       this.currentTime++;
       //console.log(this.currentTime);

     }, 1000);
/*
     this.intervalId = setInterval(() =>{
       printTime();
       this.currentTimeMil++;
       //console.log(this.currentTime);

     }, 1);*/
   } //end  startClick

   getMinutes() {
     return Math.floor(this.currentTime / 60);
   }
   getSeconds() {
     if (this.currentTime === 0){
        return 0;
     } else {
       return this.currentTime % 60;
     }
     //let this.currentTime == 0 ? return 0 :  return this.currentTime % 60 ;
   }

/*
   getMilSec(){
     return   this.currentTimeMil;
   }
*/
   twoDigitsNumber(num) {
     if (num < 10){
       return `0${num}`;
     } else {
       return String(num);
     }
   }
   stopClick() {
     clearInterval(this.intervalId);
   }
   resetClick() {
     this.currentTime = 0;
   }
   splitClick() {
     return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
    // return this.interval;
   }
}

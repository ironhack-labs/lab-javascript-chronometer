class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }





   startClick() {
     this.intervalId = setInterval(function() {
       this.currentTime += 1;
     }.bind(this),1000);
   }
   setMinutes() {
     
  return Math.floor(this.currentTime/60)
    
    
     

   }
   setSeconds() {
      
    return this.currentTime % 60





   }
  // twoDigitsNumber() {}
  // setTime() {}
  // setMilliseconds() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
  // splitClick() {}
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    
   
  }
   startClick() {
     this.intervalId = setInterval(()=>{
      this.currentTime += 1;
     }, 1000)
   }
   getMinutes() {
   let minutes; 
   return this.currentTime > 0 ? minutes = Math.floor(this.currentTime/ 60) : minutes = 0;
   }
   getSeconds() {
    return this.currentTime % 60;
   }

   getMilliseconds() {
     return this.currentTime/10 - this.getSeconds() * 100
   }
   twoDigitsNumber(digits) {
   let digitsDisplay = digits.toString();
   return digitsDisplay.length < 2
     ? "0" + `${digitsDisplay.toString()}`
     : `${digitsDisplay.toString()}`;
   }
   stopClick() {
    clearInterval(this.intervalId)
   }
    resetClick() {
   this.currentTime = 0;
    }
  // splitClick() {}
}
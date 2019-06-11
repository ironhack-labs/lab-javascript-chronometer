class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = 0;
  }

  startClick() {
 
 
    setInterval(() => {
     this.currentTime +=1;
 
    },1000)
  }

  getMinutes() {
   return parseInt(this.currentTime /= 60);
 
  }
  getSeconds() {
 
    return(this.currentTime % 60)
 
 
 
 
  }
  twoDigitsNumber(numbers) {
   return ("0" + numbers).slice(-2)
 
  }
  stopClick() {
    clearInterval(this.intervalId) ;
 
  }
  resetClick() {
  this.currentTime = 0
  }}
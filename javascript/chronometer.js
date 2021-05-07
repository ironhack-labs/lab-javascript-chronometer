class Chronometer {
  constructor(){
  this.currentTime = 0;
  this.intervalId = 0;
  }

  startClick(callback) {
   const callbackFn = () => {
     this.currentTime += 1
   }
   this.intervalId = setInterval(callbackFn, 1000);
  }
 
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber() {
    return this.currentTime.toString().padStart(2, "0");
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }
  
  resetClick() {
    return (this.currentTime = 0);
  }
  
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
       ":" +
      this.twoDigitsNumber(this.getSeconds())
    );
  }
}

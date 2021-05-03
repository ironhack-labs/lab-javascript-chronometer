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
    if (this.currentTime === 0) {
      return 0
    }
  const minutes = (this.currentTime / 60).toFixed(0);
  return Number(minutes);
}

  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    }
  const seconds = (this.currentTime).toFixed(0);
  return Number(seconds);
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
    // ... your code goes here
  }
}

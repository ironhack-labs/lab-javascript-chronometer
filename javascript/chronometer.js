class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(printTime) {  // start button
    this.intervalId = setInterval ( () => {
      this.currentTime++;
      if(printTime) printTime();
    },1000);
  }
  getMinutes() {
   return Math.floor(this.currentTime / 60);

  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(value) {
    
    return ('0' + value).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0; // reset clock
  }
  splitClick() {
    return (this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds()));
  }
}

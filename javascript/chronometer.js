class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(num) {
   if(num <10){
     return "0" + num;
   }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

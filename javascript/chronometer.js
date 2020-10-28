class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
   setInterval(() => {
  this.currentTime++; 
}, 1000);
  }
  getMinutes() {
   return Math.floor(this.currentTime /60)
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber() {
return ("0" + this.getMinutes()).slice(-2);
  }
  stopClick() {
   clearInterval(this.intervalId)
  }
  resetClick() {
   return this.currentTime =0;
  }
  splitClick() {
  return "00:00"
  }
}

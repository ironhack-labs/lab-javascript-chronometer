class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0; 
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    },1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime - 60*Math.floor(this.currentTime/60);
  }
  twoDigitsNumber(number) {
    return ('0'+number.toString()).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes())+':'+this.twoDigitsNumber(this.getSeconds());
  }
}
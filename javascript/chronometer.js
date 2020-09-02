class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++ 
      callback()
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime%60;
  }
  twoDigitsNumber(digit) {
    return `${("0" + digit).slice(-2)}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${("0" + this.getMinutes()).slice(-2)}:${("0" + this.getSeconds()).slice(-2)}`;
  }
}
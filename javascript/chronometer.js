class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback()
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100 - this.getMinutes() * 60);
  }
  getMilliseconds() {
    return this.currentTime - this.getSeconds() * 100 - this.getMinutes() *6000;
  }
  twoDigitsNumber(number) {
    return (number < 10 ? `0${number}` : `${number}`); 
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
};
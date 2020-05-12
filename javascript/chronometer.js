class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.currentTime; 
  }
  twoDigitsNumber(num) {
    return num.toString().padStart(2, '0');
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}

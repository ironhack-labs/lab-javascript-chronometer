class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);
  }
  getMinutes() {
    return Math.floor( Math.floor(this.currentTime / 100) / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100) - (this.getMinutes() * 60);
  }
  getMilliseconds(){
    return this.currentTime % 100;
  }
  twoDigitsNumber(number) {
    return ((number < 10) ? '0' : '') + number;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
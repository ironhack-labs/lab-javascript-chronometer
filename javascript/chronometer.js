class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => { this.currentTime++; callback() }, 1000);
    return this.intervalId;
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    const seconds = Math.floor((this.currentTime - this.minutes) % 60);
    return seconds;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return `${0}${number}`;
    } else {
      return `${number}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(min, sec) {
    const minutes = this.twoDigitsNumber(this.getMinutes(min));
    const seconds = this.twoDigitsNumber(this.getSeconds(sec));
    return `${minutes}:${seconds}`
  }
}
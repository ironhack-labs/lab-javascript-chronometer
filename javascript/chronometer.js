class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.miliSeconds = 0;
    this.intervalId = 0;
    this.intervalMiliSec = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
    this.intervalMiliSec = setInterval(() => {
      this.miliSeconds++;
      if (callback) {
        callback();
      }
    }, 10);
  }
  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }
  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Number(this.currentTime - this.getMinutes() * 60);
  }
  getMilliseconds() {
    return this.miliSeconds - this.currentTime * 100;
  }
  twoDigitsNumber(currentTimeDigit) {
    return currentTimeDigit < 10
      ? `0${currentTimeDigit}`
      : `${currentTimeDigit}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMiliSec);
  }
  resetClick() {
    this.currentTime = 0;
    this.miliSeconds = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
console.log(Chronometer);

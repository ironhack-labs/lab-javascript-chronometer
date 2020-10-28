class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
    this.intervalMilliSec = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }
  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMilliSec);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
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
    this.minutes = Math.floor(this.currentTime / 6000);
    return this.minutes;
  }
  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 100) % 60;
  }
  getMilliseconds() {
    return this.currentTime % 100;
  }
  twoDigitsNumber(currentTimeDigit) {
    return currentTimeDigit < 10
      ? `0${currentTimeDigit}`
      : `${currentTimeDigit}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
console.log(Chronometer);

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliIntervalId = 0;
    this.milliCurrentTime = 0;
    this.milliseconds = 0;
  }

  startClick(callback) {
    setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes() * 60);
  }

  getMilliSeconds() {
    return this.milliCurrentTime.toString().slice(-2);
  }

  twoDigitsNumber(time) {
    const parsedTime = time.toString();
    return parsedTime.length === 1 ? `0${parsedTime}` : parsedTime;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    const milliseconds = this.twoDigitsNumber(this.getMilliSeconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliCurrentTime = 0;
    this.milliIntervalId = 0;
  }
  startClick(callback, callbackMili) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
    this.milliIntervalId = setInterval(() => {
      this.milliCurrentTime++;
      if (typeof callbackMili === 'function') {
        callbackMili();
      }
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.milliCurrentTime % 100;
  }
  twoDigitsNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliCurrentTime = 0;
  }
  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    const milli = this.twoDigitsNumber(this.getMilliseconds());
    return `${min}:${sec}:${milli}`;
  }
}

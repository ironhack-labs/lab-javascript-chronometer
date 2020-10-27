class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
    this.intervalMil = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);

    this.intervalMil = setInterval(() => {
      this.milliseconds++;
      if (callback) {
        callback();
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
    return this.milliseconds - this.currentTime * 100;
  }

  twoDigitsNumber(time) {
    return time >= 0 && time < 10 ? "0" + time : time.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMil);
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

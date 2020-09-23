class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.msIntervalId = 0;
    this.msTime = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) { callback(); }
    }, 1000);
  }

  msInterval(callback) {
    this.msIntervalId = setInterval(() => {
      if (this.msTime === 99) { this.msTime = 0; }
      else { this.msTime++; }

      if (callback) { callback(); }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - (this.getMinutes() * 60);
  }

  getMilliseconds() {
    return this.msTime;
  }

  twoDigitsNumber(time) {
    if (time === 0) {
      return "00";
    }

    if (time.toString().length === 1) {
      return "0" + time.toString();
    }
    else {
      return time.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.msIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.msTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let ms = this.getMilliseconds();

    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}:${this.twoDigitsNumber(ms)}`;
    // return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}

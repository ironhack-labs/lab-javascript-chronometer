class Chronometer {
  constructor() {
    this.current_seconds = 0;
    this.interval_seconds = 0;

    this.current_milliseconds = 0;
    this.interval_milliseconds = 0;
  }

  startTimer(callback) {
    this.startMilliseconds(callback);
    this.startSeconds(callback);
  }

  startSeconds(callback) {
    this.interval_seconds = setInterval(() => {
      this.current_seconds++;
      callback();
    }, 1000);
  }

  startMilliseconds(callback) {
    this.interval_milliseconds = setInterval(() => {
      this.current_milliseconds++;
      callback();
    }, 1);
  }

  getMinutes() {
    return Math.floor(this.current_seconds / 60);
  }

  getSeconds() {
    return this.current_seconds - this.getMinutes() * 60;
  }

  getMilliseconds() {
    return this.current_milliseconds % 100;
  }

  twoDigitsNumber(current_time) {
    if (current_time < 10) {
      return "0" + String(current_time);
    } else {
      return String(current_time);
    }
  }

  stopClick() {
    clearInterval(this.interval_milliseconds);
    clearInterval(this.interval_seconds);
  }

  resetClick() {
    this.current_milliseconds = 0;
    this.current_seconds = 0;
  }

  splitClick() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const milliseconds = this.getMilliseconds();

    if ((minutes < 10 || seconds < 10) && milliseconds > 9) {
      return `${0}${minutes}:${0}${seconds}:${milliseconds}`;
    } else if ((minutes < 10 || seconds < 10) && milliseconds < 9) {
      return `${0}${minutes}:${0}${seconds}:${0}${milliseconds}`;
    } else {
      return `${minutes}:${seconds}:${milliseconds}`;
    }
  }
}

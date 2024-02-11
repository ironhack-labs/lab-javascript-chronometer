class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliIntervalId = 0;
    this.milliCurrentTime = 0;
    this.milliseconds = 0;
  }

  start(callback) {
    let that = this;
    this.intervalId = setInterval(function () {
      that.currentTime++;
      that.getTime();
      printTime(that.minutes, that.seconds);

      if (callback) {
        callback();
      }
    }, 1000);

    this.milliIntervalId = setInterval(function () {
      that.milliCurrentTime++;
      that.milliseconds = that.computeTwoDigitNumber(that.getMilliseconds());
      printMilliseconds(that.milliseconds);
      if (callback) {
        callback();
      }
      if (that.milliseconds === 99) that.milliseconds = 0;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(
      this.currentTime - this.getMinutes(this.currentTime) * 60
    );
  }

  getMilliseconds() {
    return this.milliCurrentTime.toString().slice(-2);
  }

  getTime() {
    this.minutes = this.computeTwoDigitNumber(this.getMinutes());
    this.seconds = this.computeTwoDigitNumber(this.getSeconds());
    this.milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
  }

  computeTwoDigitNumber(value) {
    return value.toString().length === 1 ? `0${value}` : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }

  reset() {
    this.currentTime = 0;
    printTime('00', '00');
    printMilliseconds('00');
  }

  split() {
    if (!this.minutes) {
      this.minutes = '00';
    }
    if (!this.seconds) {
      this.seconds = '00';
    }
    let time = `${this.minutes}:${this.seconds}:${this.milliseconds}`;
    printSplit(time);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

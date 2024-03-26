class TimeTracker {
  constructor() {
    this.startTime = 0,
    this.currentTime = 0;
    this.elapsedTime = 0;
    this.intervalId = null
  };

  beginTracking(callback) {
    this.startTime = Date.now();
    this.intervalId = setInterval(() => {
      if (!callback) {
        this.currentTime = Date.now();
        this.elapsedTime = this.startTime - this.currentTime;
        console.log(this.currentTime);
      } else {
        this.currentTime = Date.now();
        this.elapsedTime = this.currentTime - this.startTime;
        callback();
      }
    }, 10);
  }

  countMilliseconds() {
    const numberOfMilliseconds = Math.floor((this.elapsedTime % 1000) / 10);
    return numberOfMilliseconds;
  }

  calculateMinutes() {
    const numberOfMinutes = Math.floor(this.elapsedTime / (1000 * 60)) % 60;
    return numberOfMinutes;
  }

  calculateSeconds() {
    const numberOfSeconds = Math.floor(this.elapsedTime / 1000) % 60;
    return numberOfSeconds;
  }

  formatTwoDigitNumber(value) {
    const valueStringify = value.toString();
    if (value <= 9) {
      return "0" + valueStringify;
    }

    return valueStringify;
  }

  stopTracking() {
    clearInterval(this.intervalId);
  }

  resetTracking() {
    this.currentTime = 0;
  }

  recordSplitTime() {
    const minutes = this.formatTwoDigitNumber(this.calculateMinutes());
    const seconds = this.formatTwoDigitNumber(this.calculateSeconds());
    const milliseconds = this.formatTwoDigitNumber(this.countMilliseconds());
    return minutes + ":" + seconds + ":" + milliseconds;
  }
}

if (typeof module !== 'undefined') {
  module.exports = TimeTracker;
}

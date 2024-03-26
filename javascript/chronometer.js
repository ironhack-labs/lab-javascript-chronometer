class TimeTracker {
  constructor() {
    this.startTime = 0;
    this.currentTime = 0;
    this.elapsedTime = 0;
    this.intervalId = null;
  }

  beginTracking(callback) {
    this.startTime = Date.now();
    this.intervalId = setInterval(() => {
      this.currentTime = Date.now();
      this.elapsedTime = this.currentTime - this.startTime;
      if (callback) {
        callback();
      }
    }, 10);
  }

  calculateMilliseconds() {
    return Math.floor((this.elapsedTime % 1000) / 10);
  }

  calculateMinutes() {
    return Math.floor(this.elapsedTime / (1000 * 60)) % 60;
  }

  calculateSeconds() {
    return Math.floor(this.elapsedTime / 1000) % 60;
  }

  formatTwoDigitNumber(value) {
    return value < 10 ? '0' + value : value.toString();
  }

  stopTracking() {
    clearInterval(this.intervalId);
  }

  resetTracking() {
    this.currentTime = 0;
    this.startTime = 0;
    this.elapsedTime = 0;
  }

  recordSplitTime() {
    const minutes = this.formatTwoDigitNumber(this.calculateMinutes());
    const seconds = this.formatTwoDigitNumber(this.calculateSeconds());
    const milliseconds = this.formatTwoDigitNumber(this.calculateMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

if (typeof module !== 'undefined') {
  module.exports = TimeTracker;
}

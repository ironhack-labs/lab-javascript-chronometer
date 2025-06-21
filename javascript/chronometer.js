class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliseconds = 0
    this.intervalId = null;
    this.millisecondsIntervalId = null
  }

  start(callback) {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    
    const { mainDisplay } = callback?.() || {};
    if (mainDisplay) mainDisplay();
  }, 1000);

  const { millisDisplay } = callback?.() || {};
  if (millisDisplay) {
    this.millisecondsIntervalId = setInterval(() => {
      this.milliseconds = (this.milliseconds + 1) % 100;
      millisDisplay();
    }, 10);
  }
}

  getMinutes() {
    return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    return this.milliseconds;
  }

  computeTwoDigitNumber(value) {
    return (value < 10) ? `0${value}` : `${value}`
  }

  stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      clearInterval(this.millisecondsIntervalId);
      this.millisecondsIntervalId = null;
    
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds())
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

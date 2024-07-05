class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
  }

  start(callback) {
      this.intervalId = setInterval(() => {
          this.currentTime += 1;
          if (callback) {
              callback();
          }
      }, 1000);
  }

  stop() {
      if (this.intervalId !== null) {
          clearInterval(this.intervalId);
          this.intervalId = null;
      }
  }

  reset() {
      this.currentTime = 0;
      this.updateDisplay();
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
      return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
      return value.toString().padStart(2, '0');
  }

  split() {
      const minutes = this.computeTwoDigitNumber(this.getMinutes());
      const seconds = this.computeTwoDigitNumber(this.getSeconds());
      return `${minutes}:${seconds}`;
  }

  updateDisplay() {
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      if (minutesElement && secondsElement) {
          minutesElement.innerHTML = this.computeTwoDigitNumber(this.getMinutes());
          secondsElement.innerHTML = this.computeTwoDigitNumber(this.getSeconds());
      }
  }}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (callback && typeof callback === 'function') {
          callback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

module.exports = Chronometer;

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

// Get the clear button
const btnRightElement = document.getElementById('btnRight');

// Handle clear button click
btnRightElement.addEventListener('click', () => {
  // Reset the time displayed on the clock
  minDecElement.textContent = '0';
  minUniElement.textContent = '0';
  secDecElement.textContent = '0';
  secUniElement.textContent = '0';
  milDecElement.textContent = '0';
  milUniElement.textContent = '0';

  // Remove all split items from the list
  splitsContainer.innerHTML = '';
});

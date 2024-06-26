class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentMilliseconds += 1;
      if (this.currentMilliseconds === 100) {
        this.currentMilliseconds = 0;
        this.currentTime += 1;
      }
      if (callback) callback();
    }, 10); // Configurado para incrementar cada 10 milisegundos
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.currentMilliseconds;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

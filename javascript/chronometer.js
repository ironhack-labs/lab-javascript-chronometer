class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback !== undefined)
      this.intervalId = setInterval(() => { this.currentTime++; callback(); }, 1000);
    else
      this.intervalId = setInterval(() => { this.currentTime++; }, 1000);
  }

  getMinutes() { return(Math.floor(this.currentTime / 60)); }

  getSeconds() { return(Math.floor(this.currentTime % 60)); }

  computeTwoDigitNumber(value) { return (value < 10 ? '0' + value : String(value)); }

  stop() { clearInterval(this.intervalId); }

  reset() { this.currentTime = 0; }

  split() {
    let formattedTime = this.computeTwoDigitNumber(this.getMinutes(this.currentTime))
	+ ':' + this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    return (formattedTime);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

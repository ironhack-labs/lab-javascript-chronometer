class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
   this.intervalId = setInterval(() => {
    if (callback) {
      callback();
    }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const m = this.getMinutes().toString().padStart(2,'0'),
          s = this.getSeconds().toString().padStart(2,'0');
    
    return  `${m}:${s}`; 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

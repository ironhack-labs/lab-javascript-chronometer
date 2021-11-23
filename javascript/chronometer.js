class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
      this.intervalId = setInterval(()=>{
        if (callback) {callback()}
        return this.currentTime++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    if ((this.currentTime / 100) < 60) {return Math.floor(this.currentTime / 100)} else {return Math.floor(this.currentTime / 100) % 60};
  }

  getMilliseconds() {
    if (this.currentTime < 100) {return this.currentTime} else {return this.currentTime % 100};
  }
  
  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let formattedTime = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds())}`;
    return formattedTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

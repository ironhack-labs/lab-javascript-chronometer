class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start() {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return ('0' + value.toString());
    }
    if (value >= 10) {
      return value.toString();
    }
  }

  stop() {
    //console.log(this.intervalId);
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let minutesDigit = this.computeTwoDigitNumber(minutes);
    let seconds = this.getSeconds();
    let secondsDigit = this.computeTwoDigitNumber(seconds);

    let result = minutesDigit + ":" + secondsDigit;
    return result;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

// let cronometro = new Chronometer();
// cronometro.start();
// cronometro.stop();
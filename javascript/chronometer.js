class Chronometer {
  constructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.milliSeconds = 0;
    this.intervalId = null;
  }

  start(printTime) {
    this.intervalId = setInterval(() => {
      this.milliSeconds++;

      if (this.milliSeconds >= 100) {
        this.milliSeconds = 0;
        this.seconds++;

        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minutes++;
        }
        //Update the clock:
        printTime({
          minutes: this.minutes,
          seconds: this.seconds,
          milliSeconds: this.milliSeconds,
          flag: true
        });
      } else {
        //Update only the milliseconds display
        printTime({ milliSeconds: this.milliSeconds });
      }
    }, 10);
  }

  // getMinutes() {
  //   return this.minutes;
  // }

  // getSeconds() {
  //   return this.seconds;
  // }

  // getMilliSeconds() {
  //   return this.milliSeconds;
  // }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + value.toString() : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset(printTime) {
    this.minutes = 0;
    this.seconds = 0;
    this.milliSeconds = 0;
    printTime({ minutes: 0, seconds: 0, milliSeconds: 0, flag: true });
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.minutes);
    const seconds = this.computeTwoDigitNumber(this.seconds);
    const milliSeconds = this.computeTwoDigitNumber(this.milliSeconds);
    return minutes + ':' + seconds + ':' + milliSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

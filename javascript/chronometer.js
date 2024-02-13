class Chronometer {
  constructor() {
    this.currenTime = 0;
    this.intervalId = null;
  }


  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        this.currenTime++;
        callback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currenTime++;
      }, 1000);
    }
    console.log(this.intervalId)
  }

  getMinutes() {
    let minutes = this.currenTime / 60;
    return (Math.floor(minutes));
  }

  getSeconds() {
    let remainingSeconds = this.currenTime % 60;
    return (remainingSeconds);
  }

  getMilliseconds() {
    let now = Date.now();
    let elapsedMilliseconds = now - this.startTime;
    return elapsedMilliseconds % 1000;
  }
  computeTwoDigitNumber(value) {
    const valueStrigify = value.toString();
    if (value <= 9) {
      return "0" + valueStrigify;
    }

    return valueStrigify;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currenTime = 0;
    return (this.currenTime)
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let ss = this.computeTwoDigitNumber(this.getSeconds());

    return mm + ":" + ss;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

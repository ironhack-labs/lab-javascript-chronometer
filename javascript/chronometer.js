class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

    this.intervalId = setInterval(() => {

      this.currentTime++;

      if (callback != null) callback();

    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return (this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {

    let strValue = value.toString();
    let strNumber = "";

    if (strValue.length < 2) {
      return strNumber = "0" + strValue;
    } else return strValue;

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {

    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    let formattedTime = mins + ":" + secs;

    return formattedTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      if (callback) {
        callback();
      }
  }, 1000);
  }

  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    console.log(`${this.minutes}`);
    return `${this.minutes}`;
  }

  getSeconds() {
    this.seconds = Math.floor(this.currentTime % 60);
    console.log(`${this.seconds}`)
    return `${this.seconds}`
  }

  computeTwoDigitNumber(value) {
    let valueString = value + ""


    if (valueString.length < 2) {
    valueString = "0" + valueString;
    }

    return valueString;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;

    document.getElementById("minDec").innerHTML = "0";
    document.getElementById("minUni").innerHTML = "0";
    document.getElementById("secDec").innerHTML = "0";
    document.getElementById("secUni").innerHTML = "0";
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwodigitNumber(this.getSeconds)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  // start(callback) {
  //   this.intervalId = setInterval(() => {
  //     this.currentTime++;
  //     if (callback) {
  //       callback()
  //     }
  //   }, 1000);
  // }
  start() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
    return this.intervalId
  }

  getMinutes() {
    let minutes = Math.floor((this.currentTime / 60))
    return minutes
  }

  getSeconds() {
    let secs = this.currentTime % 60
    return +secs.toFixed(0)
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString()
    if (valueString.length === 1) {
      return '0' + valueString
    }
    else return valueString
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;

  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

let chrono = new Chronometer
// const printTimeCallback = () => { console.log(chrono.currentTime) }
chrono.start()
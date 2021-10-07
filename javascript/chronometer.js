class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if (typeof callback === "function") {
      console.log("In bonus callback");
      callback()
    } else {
      console.log("Not in bonus callback");
      this.intervalId = setInterval(() => this.currentTime++, 1000)
    }
  }

  getMinutes() {
    let passedMinutes
    passedMinutes = Math.floor(this.currentTime/6000)
    return passedMinutes
  }

  getSeconds() {
    // returns remainding seconds of currentTime downscaled to full minutes
    return Math.floor(this.currentTime/100%60)
  }

  getMilliSeconds() {
    const ms = String(this.currentTime).slice(-2)
    return ms
  }

  computeTwoDigitNumber(value) {
    let valueAsString = String(value)
    if (valueAsString.length < 2)
      valueAsString = "0" + valueAsString
    else
      valueAsString = valueAsString.slice(-2)
    return valueAsString
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    //console.log(this.currentTime);
    const split = this.computeTwoDigitNumber(this.getMinutes()) + 
    ":" + 
    this.computeTwoDigitNumber(this.getSeconds()) +
    ":" + 
    this.getMilliSeconds()
    console.log(split)
    return split
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

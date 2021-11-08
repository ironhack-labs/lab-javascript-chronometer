class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
      this.intervalId = setInterval(() => {
        return this.currentTime ++
        callback && callback
      }, 1000);
    }
  
  getMinutes() {
    let timeInMinutes = Math.floor(this.currentTime / 60)
    return timeInMinutes

  }

  getSeconds() {
    let timeInSeconds = this.currentTime % 60
    return timeInSeconds
    }

  computeTwoDigitNumber(value) {
    let stringNumber = value.toString()
    if(value === 0) {
      return "00"
    } else if (stringNumber.length < 2) {
      return `0${stringNumber}`
    } else {
      return stringNumber
    }
  }

  stop() {
      clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`
  }
}






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

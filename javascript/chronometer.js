
class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  
  }

  start(callback) {
    let counter = 0
    this.intervalId = setInterval(() => {
      counter++
      console.log(counter)
      this.currentTime = counter
    }, 1000)
  }

  getMinutes() {
    const minutes = this.currentTime / 60
    return parseInt(minutes)
    
  }

  getSeconds() {
    const seconds = (this.currentTime % 60)
    return parseInt(seconds)
  }

  computeTwoDigitNumber(value) {
    const number = value.toString()
    return number.padStart(2, "0")
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
   this.currentTime = 0
  }

  split() {
    const mins = minutes()
    const secs = seconds()

    const minsWell = number(mins)
    const secsWell = number(secs)


    return (minsWell + ':' + secsWell)
    /* '90'
    const splitTime = this.currentTime.toString()
    const splitThis = splitTime.padStart(2, "0")
    const splitTimeWell = splitThis.split(this.minutes, this.seconds)
    return splitThis */

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

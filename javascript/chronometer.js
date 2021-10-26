class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
    return this.currentTime++
  }, 1000)
  }

  getMinutes() {
    const howManyMinutes = this.currentTime / 60
    return Math.floor(howManyMinutes)
  }

  getSeconds() {
    const howManySeconds = this.currentTime % 60
    return Math.floor(howManySeconds)
  }

  computeTwoDigitNumber(value) {
    const alwaysTwo = value.toString()
    if (alwaysTwo.length < 2)
    return `0${alwaysTwo}`
    else if (alwaysTwo.length === 2)
    return alwaysTwo   
  }

  stop() {
     clearInterval(this.intervalId )
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const currentSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${currentMinutes}:${currentSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

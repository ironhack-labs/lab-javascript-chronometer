class Chronometer {

  constructor() {
    this.currentTime = 0
    this.currentTime2 = 0
    this.intervalId = null
  }

  start(callback, miliseconds) {
    this.intervalID = setInterval(() => {
      this.currentTime++
      if (callback) {
        callback()
      }
    }, 1000)
    /*this.intervalID2 = setInterval(() => {
      this.currentTime2++
      if (miliseconds) {
        miliseconds()
      }
    }, 1)*/
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return (this.currentTime % 60)

  }

  /*getMS() {
    return (this.currentTime2)
  }*/

  computeTwoDigitNumber(value) {
    let placeholder = ""
    if (value == 0) {
      placeholder = '00'
    }
    else if (value >= 10) {
      placeholder = `${value}`
    }
    else {
      placeholder = '0' + value

    }

    return placeholder
  }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()

    minutes = this.computeTwoDigitNumber(minutes)
    seconds = this.computeTwoDigitNumber(seconds)


    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

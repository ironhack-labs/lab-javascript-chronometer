class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }



  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      console.log(this.currentTime)
      if (callback) {
        callback()
      }
    }, 1000)

  }

  getMinutes() {
    // ... your code goes here
    let minutes = 0
    minutes = this.currentTime / 60
    minutes = Math.floor(minutes)
    return minutes

  }

  getSeconds() {
    // ... your code goes here
    let seconds = 0
    seconds = this.currentTime % 60
    seconds = Math.floor(seconds)
    return seconds
  }


  computeTwoDigitNumber(value) {
    let numberModified = ""
    numberModified = value
    if (value < 10) {
      numberModified = "0" + value
    }
    if (value == 0) {
      numberModified = "00"
    }
    if (value >= 10) {
      numberModified = value.toString()
    }
    return numberModified
    // ... your code goes here
  }

  stop() {
    // ... your code goes here

    clearInterval(this.intervalId)
    console.log("stopping crhonometer")

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
    console.log("reseted")
  }

  split() {
    // ... your code goes here
    let splitS = ""
    splitS = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
    return splitS
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

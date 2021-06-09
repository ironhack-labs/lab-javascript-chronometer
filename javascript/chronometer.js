class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null

  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {

      ++this.currentTime
      console.log(this.currentTime)


      if (callback) {
        callback()
      }

    }, 1000)

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60 // % cosa de Guillermo

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let temp = String(value)
    if (temp.length < 2) {
      temp = "0" + temp
    }
    return temp
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    console.log((`${minute}:${seconds}`))
    return (`${minute}:${seconds}`)

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

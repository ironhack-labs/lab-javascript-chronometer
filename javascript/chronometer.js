class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
      this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (callback) {
        callback()
      }
      this.currentTime++
    }, 1000)


  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let newVal = value.toString()

    if (newVal.length > 2) {
      let splicedVal = newVal.slice(0, 2)
      return splicedVal
    }

    if (newVal.length === 1) {
      let newArr = [newVal[0]]
      newArr.unshift('0')
      let newString = newArr.join("")
      return newString
    }
    return newVal

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
    let time = document.querySelectorAll('.number')
    time.forEach(e => e.innerHTML = 0)
  }

  split() {
    // ... your code goes here

    // return 'mm:ss'
    return (this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()))
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

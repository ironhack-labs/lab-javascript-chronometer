class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start() {
    // ... your code goes here

    this.intervalId = setInterval(() => {



      this.currentTime++
      printSeconds()
      printMinutes()
      console.log(this.currentTime)
    }, 10);

  }


  getMinutes() {
    // ... your code goes here
    return this.computeTwoDigitNumber(Math.floor(this.currentTime / 60))
  }

  getSeconds() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.currentTime % 60)

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let str = ""
    str += value

    if (str.length === 1) {
      const arr = [str]

      arr.unshift("0")
      let a = ""
      a += arr.join("")
      return a

    } else {

      return str
    }


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
    const a = this.computeTwoDigitNumber(this.getMinutes())
    const b = this.computeTwoDigitNumber(this.getSeconds())

    return `${a}:${b}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

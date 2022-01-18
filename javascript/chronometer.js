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

      console.log(this.currentTime)
    }, 10);

  }


  getMinutes() {
    // ... your code goes here
    return (Math.floor(this.currentTime / 6000))
  }

  getSeconds() {
    // ... your code goes here
    return (Math.floor(this.currentTime / 100)) % 60

  }

  getMilliseconds() {
    return (this.currentTime % 100)
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
    const c = this.computeTwoDigitNumber(this.getMilliseconds())
    return `${a}:${b}:${c}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

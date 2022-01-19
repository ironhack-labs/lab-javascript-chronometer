class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
    }


  start(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
    if (callback){
    return (callback)
    }
    this.currentTime++
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
  return Math.trunc(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
  return this.currentTime % 60

  }

  computeTwoDigitNumber(number) {
  // ... your code goes here
  if (number<10){
  return "0"+ number;
  } else {
  return number.toString()
  }
  }

  stop() {
  // ... your code goes here
  clearInterval(this.intervalId)
  }

  reset() {
  // ... your code goes here
  this.currentTime = 0;
  }

  split() {
  // ... your code goes here
  let minutes= this.computeTwoDigitNumber(this.getMinutes())
  let seconds= this.computeTwoDigitNumber(this.getSeconds())
  return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

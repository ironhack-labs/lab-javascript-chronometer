class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback) callback()
    }, 1000)
  }

getMinutes() {
  return Math.floor(this.currentTime / 60)
}

getSeconds() {
  return this.currentTime % 60
}

computeTwoDigitNumber(value) {
  const plusZero = '00' + value
  return plusZero.slice(-2)

  /*  const string = value.toString()
   if (string.length < 2) {
     return '0' + string
   } 
   return string */
}

stop() {
  return clearInterval(this.intervalId)
}

reset() {
  return this.currentTime = 0
}

split() {
  return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`

}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

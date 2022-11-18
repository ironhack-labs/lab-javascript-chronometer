class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId= null
  }

  start(callback) {
    this.intervalID = setInterval(() => {
        this.currentTime += 1
        if(callback) 
            callback(
                this.computeTwoDigitNumber(this.getMinutes()),
                this.computeTwoDigitNumber(this.getSeconds()) 
            )
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if ( value <= 9 ) return `0${value}`
    else return `${value}`
  }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
    this.currentTime = 0
    document.querySelector('.minDec').innerHTML = '0'
    document.querySelector('.minUni').innerHTML = '0'
    document.querySelector('.secDec').innerHTML = '0'
    document.querySelector('.secUni').innerHTML = '0'
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

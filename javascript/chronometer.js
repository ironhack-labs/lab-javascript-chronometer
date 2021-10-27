class Chronometer {
  constructor() {
    this.currentTime = 5320;
    this.intervalId = null;
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      if(callback)callback()
      this.currentTime ++
    }, 1*1000);

  }
  getMinutes() {
    let min = Math.floor(this.currentTime / 60)
    return min    
  }

  getSeconds() {
    let sec = this.currentTime % 60
    return sec
  }

  computeTwoDigitNumber(value) {
      value = "0"+value
      return value.slice(-2)  
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}



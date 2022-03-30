class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback()
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return parseInt(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60
  }


  computeTwoDigitNumber(value) {
    if (value>=10){
      return value.toString()
    } else { 
      return '0'+value
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    let minutes=this.getMinutes()
    let convertedMinutes=this.computeTwoDigitNumber(minutes)
    let seconds=this.getSeconds()
    let convertedSeconds=this.computeTwoDigitNumber(seconds)
    return convertedMinutes+':'+convertedSeconds
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

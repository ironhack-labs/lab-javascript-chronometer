class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId =
    setInterval(() => {
    this.currentTime++
    }, 1000);

  }

  getMinutes() {
    let minutes = this.currentTime / 60
    return parseInt(minutes);

  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    
    //return value.toFixed().padStart(2,'0');
    
    if (value < 10){
      return '0' + value 
    } else {
      return value.toString() 
    }
    
  }

  stop() {
  clearInterval(this.intervalId)  }

  reset() {
    this.currentTime = 0;
  }

  split() {
  const minutes = this.getMinutes()
  const twoDigitsMinutes = this.computeTwoDigitNumber(minutes)
  const seconds = this.getSeconds()
  const twoDigitsSeconds = this.computeTwoDigitNumber(seconds)
  return `${twoDigitsMinutes}:${twoDigitsSeconds}` 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

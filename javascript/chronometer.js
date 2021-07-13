
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(function(){
      this.currentTime = this.currentTime ++;
      if(callback){
        callback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.ceil(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      let result = '0' + value.toString()
      return result

    }
    return result
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

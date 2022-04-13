class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if(callback){
        callback();
      }
      this.currentTime += 1;
    } ,1000)
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
    let string = value.toString();
    if (string.length < 2){
      string = "0"+ string
    } 

    return string
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
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    return this.computeTwoDigitNumber(minutes) + ":" + this.computeTwoDigitNumber(seconds)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

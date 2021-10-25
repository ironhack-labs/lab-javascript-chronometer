class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      if(callback != null){ //Execute the callback function if it's passed
        callback()
      }
      this.currentTime++}, 1000)
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60) //Trunc deletes the decimals
  }

  getSeconds() {
    let seconds = this.currentTime
    if(seconds > 60){
      while(seconds > 60){ //Subtract minutes until only seconds are left
        seconds -= 60
      }
      return seconds
    }
    else return seconds
  }

  computeTwoDigitNumber(value) {
    const display = value.toString()
    if(display.length > 1){
      return display
    } else return '0' + display
  }

  stop() {
    // ... your code goes here
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

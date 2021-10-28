class Chronometer {
  constructor() {
    this.currentTime = 1
    this.currentMillis = 0
    this.intervalId = null
    this.milliInterval = null
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      if(callback != null){ //Execute the callback function if it's passed
        callback()
      }
      this.currentTime++}, 1000)

      this.milliInterval = setInterval(() => { //Create another interval to count the milliseconds
        if (this.currentMillis < 100 ) { //When the milli counter reaches 100, a new second starts, so set it to 0
          this.currentMillis++;
        } else {
          this.currentMillis = 0
        }
        printMilliseconds()
      }, 10);
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60) //Trunc deletes the decimals
  }

  getSeconds() {
    let seconds = this.currentTime
    if(seconds >= 60){
      while(seconds >= 60){ //Subtract minutes until only seconds are left
        seconds -= 60
      }
      return seconds
    }
    else return seconds
  }

  computeTwoDigitNumber(value) {
    const display = value.toString() //Convert number to string
    if(display.length > 1){ 
      return display
    } 
    else return '0' + display //If the number is a single digit concatenate a 0 before the number
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.milliInterval)
  }

  reset() {
    this.currentTime = 0 
  }

  split() {
      const minutes = this.computeTwoDigitNumber(this.getMinutes()) //Get the minutes, seconds and millis in string from the earlier methods
      const seconds = this.computeTwoDigitNumber(this.getSeconds())
      const milliseconds = this.computeTwoDigitNumber(this.currentMillis)

      return minutes + ':' + seconds + ',' + milliseconds //Concatenate everything
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
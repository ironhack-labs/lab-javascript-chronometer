class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback) {
        callback();
      }
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    let minutes = (this.currentTime)/60;
    minutes = Math.floor(minutes);
    return minutes;
  }

  getSeconds() {
    let seconds = (this.currentTime);
    seconds = Math.floor(seconds);
    if (this.currentTime===0) {
      return 0
    } else if (this.currentTime>0) {
      return this.currentTime - (this.getMinutes(this.currentTime)*60)
    }
  
  }

  computeTwoDigitNumber(value) {
      if(value<=9) {
        return "0" + value
      } else if (value>9) {
      return `${value}`
    }
  }

  stop() {
    clearInterval (this.intervalId)
  }

  reset() {
    this.currentTime= 0 
  }

  split() {
    let updatedMinutes= this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    let updatedSeconds= this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    return updatedMinutes + ":" + updatedSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

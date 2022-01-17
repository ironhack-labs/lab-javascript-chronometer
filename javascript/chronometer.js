class Chronometer {
  constructor() {
  
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
   
    this.currentTime = 0;
    this.intervalId = setInterval(() => {
      this.currentTime++;
      return this.currentTime;
    }, 1000);
  }

  getMinutes() {
    if ( this.currentTime < 59 ) {
      return 0
    } else {
      let howManyMinutes = Math.floor(this.currentTime/60)
     return howManyMinutes;  
    }
  }

  getSeconds() {
    if(this.currentTime == 0) {
      return 0
    } else if (this.currentTime < 10) {
      this.currentTime = 0 + this.currentTime
    } 
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value == 0) {
      return '00'
    } else if (value < 10) {
    return `0${value}`
    }else{    
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return (this.computeTwoDigitNumber(this.getMinutes())) + ':' + this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
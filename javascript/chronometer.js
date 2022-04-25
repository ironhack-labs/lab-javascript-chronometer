class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
    const intervalId = setInterval(() => {this.currentTime +=1}, 1000); 
  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime/60);
    return numberOfMinutes
  }

  getSeconds() {
   let numberOfSeconds = this.currentTime % 60
   return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber
    if (value<10){return `0${value}`
  }else {return `${value}`}
  }

  stop() {
    clearInterval(this.intervalId)
    
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    return `${numberOfMinutes}:${numberOfSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

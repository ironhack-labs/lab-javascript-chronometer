class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
     return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let i = value

    if (i < 10) {
      i = "0" + i;
    }
    
  return `${i}`;
  
}

  stop() {
    
      clearInterval(this.intervalId);
      this.intervalId = null;
  }

  reset() {
    this.currentTime = 0; 
  }

  split() {
    return this.computeTwoDigitNumber (`${this.getMinutes()}  : ${this.getSeconds()}`) ; 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) callback();
      this.currentTime += 1
    }, 1000);
  }

  //I tried like this but it wasn´t working....I had to look on the CodeALong to check that. I got normally almost everything done. Sometimes I got stuck with sintax, or problems like this.

  //  
  //   if (callback) {
  //     this.intervalId = setInterval(() => {
  //       this.currentTime += 1; 1000
  //     }
  //       callback());
  //   } else {
  //     this.intervalId = setInterval(() => {
  //       this.currentTime += 1; 1000
  //     });
  //   }
  // }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  //Other way to solve computeTwoDigitNumber() would be:
  // computeTwoDigitNumber(value) {
  //   return `0${value}`.slice(-2);
  // }  

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

/* The following is required to make unit tests work. */
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

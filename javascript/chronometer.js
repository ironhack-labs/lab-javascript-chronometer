class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
const countSeconds = () => {
  this.currentTime ++;
    if (callback) {
      callback()
    }
    //console.log(this.currentTime)

  };
  this.intervalId = setInterval(countSeconds, 1000);
}

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return (minutes)

  }
  console.log(this.getMinutes)

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
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

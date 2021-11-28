class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60 );
    return minutes; 
    // ... your code goes here
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let stringNumber = "";

    if (value <= 9 ){
      stringNumber = "0" + value.toString()
    } else {
      stringNumber = value.toString()
    }
    return stringNumber;
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    return this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minute}:${seconds}`
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

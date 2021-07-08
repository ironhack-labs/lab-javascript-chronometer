class Chronometer {
  constructor() {
    this.currentTime = 0; //starttime
    this.intervalId = null
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(callback) {callback()};
      console.log(this.currentTime)
      
    }, 1000);
    // ... your code goes here
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (number < 10) {
      return `0${number}`;
    } else return number.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${formattedMinutes}:${formattedSeconds}`;
    //string
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

// const chronometer = new Chronometer(0, 10)

// console.log(chronometer.start())
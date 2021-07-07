class Chronometer {
  constructor() {
    this.currentTime = 0; //starttime
    this.intervalId = null
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {

      if(callback) callback()
      this.currentTime += 1;
      // console.log(this.currentTime)
    }, 1000);
    // ... your code goes here
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length < 2) return "0"+value.toString()
    else return value.toString()
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
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

const chronometer = new Chronometer(0)

// chronometer.start()

console.log(chronometer.computeTwoDigitNumber(3))

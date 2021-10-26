class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
  }

  getMinutes() {
    let howManyMinutes = this.currentTime / 60;
    let totalMinutes = Math.floor(howManyMinutes) 
    
    return totalMinutes;
    
  }

  getSeconds() {
    return this.currentTime % 60

  }

  computeTwoDigitNumber(value) {
    
    let paddedValue = ('0'+value).slice(-2);
    return paddedValue;

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    let paddedMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let paddedSeconds = this.computeTwoDigitNumber(this.getSeconds());

    let minutesAndSeconds = `${paddedMinutes}:${paddedSeconds}`
    console.log(minutesAndSeconds);

    return minutesAndSeconds
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

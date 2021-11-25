class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

    this.millisecondsIntervalId = 0;
    this.currentMilliseconds = 0; 
  }

  startClick(printTime, printMilliseconds) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (printTime) printTime();
    }, 1000);

    this.millisecondsIntervalId = setInterval( () => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds++;
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }

  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId); 
  }

  resetClick() {
    this.currentTime = 0;

    this.currentMilliseconds = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}







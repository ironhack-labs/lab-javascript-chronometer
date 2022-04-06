class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0;
    this.milliIntervalId = null;
  }
  // Intervals to calculate the chronometer
  start(printTime, printMilliseconds) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTime === "function") {
        printTime();
      }
    }, 1000);

    this.milliIntervalId = setInterval(() => {
      if (this.currentMilliseconds === 99){
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds ++;
      if (printMilliseconds){
        printMilliseconds();
      }
    }, 10);
  }
  // Methods to get and manipulate the timer
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
  clearInterval(this.intervalId);
  clearInterval(this.milliIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    minDecElement.innerHTML = "0";
    minUniElement.innerHTML = "0";
    secDecElement.innerHTML = "0";
    secUniElement.innerHTML = "0";
    milDecElement.innerHTML = "0";
    milUniElement.innerHTML = "0";
  }

  split() {
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let formattedMilliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);
    let formattedTime = formattedMinutes + ":" + formattedSeconds + "."+ formattedMilliseconds;
    return formattedTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
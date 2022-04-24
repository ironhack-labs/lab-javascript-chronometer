class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutos = 0;

    minutos = this.currentTime / 60;
    minutos = Math.floor(minutos);
    minutos = minutos.toFixed(0);

    return Number(minutos);
  }

  getSeconds() {
    // ... your code goes here

    let toSubstract = this.getMinutes() * 60;

    let portionOfSeconds = this.currentTime - toSubstract;
    return portionOfSeconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    var cronoSeg = value;

    if (cronoSeg < 10) {
      return (cronoSeg = '0' + cronoSeg.toFixed(0));
    } else if (cronoSeg >= 10) {
      return (cronoSeg = cronoSeg.toFixed(0));
    }
  }

  stop() {
    // ... your code goes here
    let interval = this.intervalId;
    return clearInterval(interval);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let printSec = this.computeTwoDigitNumber(this.getSeconds());
    let printMin = this.computeTwoDigitNumber(this.getMinutes());

    return printMin+':'+printSec;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

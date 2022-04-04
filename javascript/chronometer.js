class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalID = setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    let timeInMinutes = Math.floor(this.currentTime / 60);
    return timeInMinutes;
  }

  getSeconds() {
    let timeInSeconds = this.currentTime % 60;
    return timeInSeconds;
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = value.toString();
    if (twoDigitNumber.length == 1) {
      let newTwoDigitNumber = "0" + twoDigitNumber;
      return newTwoDigitNumber;
    } else {    
    return twoDigitNumber;
  }
}

  stop() {
  clearInterval(this.intervalID)  
}

  reset() {
    this.currentTime = 0;
  }

  split() {
    let findMinutes = this.getMinutes();
    let findSeconds = this.getSeconds();
    let splitMinutes = this.computeTwoDigitNumber(findMinutes);
    let splitSeconds = this.computeTwoDigitNumber(findSeconds);
    let splitTime = `${splitMinutes}:${splitSeconds}`;
    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

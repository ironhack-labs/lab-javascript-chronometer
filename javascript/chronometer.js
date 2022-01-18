class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
      }
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
    return this.currentTime;
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / (60));
    return minutes;
  }

  getSeconds() {
    let seconds = (this.currentTime) % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let stringValue = (value).toString();
    let paddedString;
    if (stringValue.length === 0) {
      return "00";
    }
    if (stringValue.length === 2) {
      return stringValue;
    } else if (stringValue.length === 1) {
      paddedString = `0${stringValue}`;
      return paddedString;
    } else {
      throw new Error("Something went wrong!");
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let stringMinutes = this.computeTwoDigitNumber(minutes);
    let stringSeconds = this.computeTwoDigitNumber(seconds);
    let formattedTime = `${stringMinutes}:${stringSeconds}`;
    return formattedTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

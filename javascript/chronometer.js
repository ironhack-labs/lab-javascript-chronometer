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
    }, 10);
    return this.currentTime;
  }

  getMinutes() {
    let minutes = Math.floor((this.currentTime / 100) / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60);
    return seconds;
  }

  getMilliseconds() {
    let milli = this.currentTime % 100;
    console.log("Milliseconds: ", milli);
    return milli;
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
      console.log("Logging stringValue in error: ", stringValue);
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
    let milliseconds = this.getMilliseconds();
    let stringMinutes = this.computeTwoDigitNumber(minutes);
    let stringSeconds = this.computeTwoDigitNumber(seconds);
    let milliString = this.computeTwoDigitNumber(milliseconds);
    let formattedTime = `${stringMinutes}:${stringSeconds}:${milliString}`;
    console.log("Milliseconds, string: ", milliseconds, milliString);
    console.log("Seconds, string: ", seconds, stringSeconds);
    console.log("Minutes, string: ", minutes, stringMinutes);
    console.log("Formatted time: ", formattedTime);
    return formattedTime;
  }
}

const myChrono = new Chronometer();
myChrono.start();
setInterval(()=>{
  myChrono.split();
}, 10)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

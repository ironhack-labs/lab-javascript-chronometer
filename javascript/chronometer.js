// setting up the class with its properties
class Chronometer {
  // The constructor will add 2 properties, the currentTime for tracking the time and the intervalId for clearing the setInterval
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  // All below this line is methods
  // This method can be called when we need the chronometer to start counting
  start(funct) {
    this.intervalId = setInterval(()=> {
      this.currentTime++;
      // This piece of code executes a function every 10millisecs, if a function is passed
      if (funct) {
        // The function being executed: printTime() @ index.js - this prints the time
        funct();
      }
      // When trying executing setInterval every 1 "milliseconds", every second would pass after 250 iterations and every minute after 15,000 iterations
      // So it made more sense to have it every 10 instead -
    }, 10);
  }

  getMinutes() {
    // There's 6000 centiseconds in a minute, %60 will make it go from 0 to 59
    return Math.floor(this.currentTime / 6e3) % 60;
  }

  getSeconds() {
    // There's 100 centiseconds in a second, %60 will make it go from 0 to 59
    return Math.floor(this.currentTime / 100) % 60;
  }

  getMilliseconds() {
    // The module will show the count going from 0 to 99
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // If the number is just one digit or smaller than 9, add a 0 for proper format when printing it out
    return value > 9 ? value.toString() : `0${value}`;
  }

  stop() {
    this.intervalId = clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // Sets format for the time that has been splitted
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()) + '.' + this.computeTwoDigitNumber(this.getMilliseconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

// https://github.com/OvellesNegres/solution-lab-chronometer-js/blob/main/javascript/chronometer.js
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

    this.currentMilliseconds = 0;
  }

  start(callback) {
    //!! Remember to save the interval execution in the intervalId property
    this.intervalId = setInterval(() => {
      //!!If there is a callback, execute it, it it isn't the code will ignore the execution
      if (callback) callback();
      this.currentTime += 1;
      //this.currentTime++
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  getMilliseconds() {
    return Math.round(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, 0);
    // (OR) return ('0' + value).slice(-2);

    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    //Remember you can use a function within a function and pass the return as an argument for another function
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}

// let cr = new Chronometer();
// cr.start();
// cr.getMinutes();
// console.log(cr.start());
// console.log(cr.getSeconds());
// console.log('mamma');
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

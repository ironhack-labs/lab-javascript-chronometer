class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // Bonus this.currentMilliseconds = 0;
    // Bonus this.intervalIdMilliseconds = null;
  }

  start(callback) {
    //!! Remember to save the interval execution in the intervalId property
    this.intervalId = setInterval(() => {
      //!!If there is a callback, execute it, it it isn't the code will ignore the execution
      if(callback) callback()
      this.currentTime += 1;
      //this.currentTime++
    }, 1000);

    /* Bonus
    this.intervalIdMilliseconds = setInterval(() => {
      if(callback) callback()
      this.currentMilliseconds += 1;
    }, 10)
    */
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    // Bonus return this.currentMilliseconds
  }

  computeTwoDigitNumber(value) {
    /* If else Option  */
    // if (value < 10) return '0' + String(value);
    // else return value.toString();

    /* One line option */
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    // Bonus clearInterval(this.intervalIdMilliseconds)
  }

  reset() {
    this.currentTime = 0;
    // Bonus this.currentMilliseconds = 0;
  }

  split() {
    //Remember you can use a function within a function and pass the return as an argument for another function
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
   // Bonus const milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);

    // Bonus return `${minutes}:${seconds}:${milliseconds}`;
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

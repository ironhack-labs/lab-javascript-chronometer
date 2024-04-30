class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // check if an interval has already been set up
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime = this.currentTime + 1;

        // checks whether a callback function is provided 
        if (callback) {
          callback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let numberString = value.toString();
    numberString = ('0' + numberString).slice(-2); // take the last two characters of the string
   
    // alternative:
    // if (numberString.length < 2) {
    //   numberString = '0' + numberString;
    // }

    return numberString;
  }

  stop() {
    clearInterval(this.intervalId);
    // release our intervalID from the variable
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    printTime(); // need to reset the values in our HTML file, by using .innerHTML.
  }

  split() {
    const formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

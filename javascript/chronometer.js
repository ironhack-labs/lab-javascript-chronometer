class chronometer {
  constructor() {
    function Chronometer() {
      currentTime = 0;
      intervalId = null;
    }
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000);
  }
    

  getMinutes() {
    chronometer.getMinutes = function () {
    return Math.floor(this.currentTime / 60);
};
  }

  getSeconds() {
    chronometer.getSeconds = function () {
      return Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60);
    };
  }

  computeTwoDigitNumber(value) {
    chronometer.computeTwoDigitsNumber = function (number) {
      return (number.toString().length === 1) ? `0${number}` : number.toString();
};

  stop() {
    chronometer.stop = function () {
      clearInterval(this.intervalId);
      clearInterval(this.milliIntervalId);
    };
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}





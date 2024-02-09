class Chronometer {
  constructor() {
    this.startTime = 0,
    this.currentTime = 0;
    this.elapsedTime = 0;
    this.intervalId = null
  };

  start(callback) {
    this.startTime = Date.now();
    this.intervalId = setInterval(() => {
      if (!callback) {
        this.currentTime = Date.now();
        this.elapsedTime = this.startTime - this.currentTime;
        console.log(this.currentTime);
      } else {
        this.currentTime = Date.now();
        this.elapsedTime = this.currentTime - this.startTime;
        callback();
      }
    }, 10);
  }

  getMilliseconds() {
    const numberOfMilliseconds = Math.floor((this.elapsedTime % 1000) / 10);
    return numberOfMilliseconds;
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.elapsedTime / (1000 * 60)) % 60;
    return numberOfMinutes;
  }

  getSeconds() {
    const numberOfSeconds = Math.floor(this.elapsedTime / 1000) % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    const valueStrigify = value.toString();
    if (value <= 9) {
      return "0" + valueStrigify;
    }

    return valueStrigify;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return minutes + ":" + seconds + ":" + milliseconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


/* class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  };

  start(callback) {
    this.intervalId = setInterval(() => {
      if (!callback) {
        this.currentTime += 1;
        console.log(this.currentTime);
      } else {
        this.currentTime += 1;
        callback();
      }
      
    }, 1000);
  }

  getMilliseconds() {
    const numberOfMilliseconds = (this.currentTime * 1000) / 100;
    console.log(numberOfMilliseconds);
    return numberOfMilliseconds;
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.currentTime / 60);
    return numberOfMinutes;
  }

  getSeconds() {
    const numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    const valueStrigify = value.toString();
    if (value <= 9) {
      return "0" + valueStrigify;
    }
    return valueStrigify;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ":" + seconds;
  }
} */
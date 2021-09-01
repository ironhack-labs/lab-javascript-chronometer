class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

    this.currentTimeMili = 0;
    this.intervalIdMili = null;
  }

  start(callback) {
    // ... your code goes here
    const incrementOne = callback => {
      this.currentTime++;
    }
    this.intervalId = setInterval(incrementOne, 1000)
  }

  // ===> BONUS
  startMili () {
    const incrementOneMili = callback => {
      this.currentTimeMili++;
    }
    this.intervalIdMili = setInterval(incrementOneMili, 10)
  }

  getMili () {
    let milis = this.currentTimeMili % 100;
    return milis;
  }

  splitMili () {
    let value1 = this.computeTwoDigitNumber(this.getMili());
    return `${value1}`
  }

  // ===> BONUS

  getMinutes() {
    // ... your code goes here
    let minutes = Math.trunc(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let strgFrase = value.toString();
    let strgTwo = '0';
    if (strgFrase.length < 2) {
      return strgTwo += strgFrase;
    }else {
      return strgFrase;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMili);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentTimeMili = 0;
  }

  split() {
    // ... your code goes here
    let value1 = this.computeTwoDigitNumber(this.getMinutes());
    let value2 = this.computeTwoDigitNumber(this.getSeconds());
    return `${value1}:${value2}`
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

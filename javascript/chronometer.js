class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback){
        callback();
      }
    }, 10);
  }


  getMinutes() {
    // ... your code goes here
    let numbermin = this.currentTime / 6000;
    return ~~numbermin;

  }

  getSeconds() {
    let numbersec = (this.currentTime % 60000) / 100;
    return ~~numbersec;
  }

  getMilliseconds(){
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    let second = this.getSeconds();
    let minute = this.getMinutes();
    let millisecond = this.getMilliseconds();
    let seconddigi = this.computeTwoDigitNumber(second);
    let minutedigi = this.computeTwoDigitNumber(minute);
    let millisecdigi = this.computeTwoDigitNumber(millisecond);
    return `${minutedigi}:${seconddigi}:${millisecdigi}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

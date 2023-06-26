class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    },1000)
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime % 60);
    return seconds;
  }
  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).padStart(2, "0");
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
    // ... your code goes here
    return`${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

